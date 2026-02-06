"""
Boysun IM - Dars Jadvali Backend (Flask)
To'liq mukammal Python backend
"""
import os
import json
import logging
from datetime import datetime
from functools import wraps
from flask import Flask, request, jsonify, send_from_directory, session

# ============================================
# KONFIGURATSIYA
# ============================================

# Initialize Flask
app = Flask(__name__, 
            static_folder='.',
            static_url_path='',
            template_folder='.')

# Secret key for sessions
app.secret_key = os.getenv('SECRET_KEY', 'boysun_im_secure_secret_key_2026')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Admin credentials
ADMIN_LOGIN = "Barzu Majidov01"
ADMIN_PASS = "boysun2026"

# Database files (using absolute paths)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEACHERS_DB = os.path.join(BASE_DIR, 'teachers.json')
TIMETABLE_DB = os.path.join(BASE_DIR, 'timetable.json')
TIMETABLE_JS = os.path.join(BASE_DIR, 'timetable-data.js')

# ============================================
# HELPER FUNCTIONS
# ============================================

def load_json_file(filepath, default=None):
    """Load JSON file with error handling"""
    if default is None:
        default = {}
    
    try:
        if not os.path.exists(filepath):
            logger.warning(f"File not found: {filepath}, creating with default value")
            save_json_file(filepath, default)
            return default
        
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        logger.error(f"Error loading {filepath}: {e}")
        return default

def save_json_file(filepath, data):
    """Save JSON file with error handling"""
    try:
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        logger.info(f"Saved: {filepath}")
        return True
    except Exception as e:
        logger.error(f"Error saving {filepath}: {e}")
        return False

def sync_timetable_to_js(timetable_data):
    """Sync timetable.json changes to timetable-data.js"""
    try:
        if not os.path.exists(TIMETABLE_JS):
            logger.warning(f"JS file not found: {TIMETABLE_JS}")
            return False
        
        with open(TIMETABLE_JS, 'r', encoding='utf-8') as f:
            js_content = f.read()
        
        # Convert to formatted JSON string
        formatted_json = json.dumps(timetable_data, ensure_ascii=False, indent=4)
        
        # Replace the timetableData object in JS file
        import re
        pattern = r'(timetableData:\s*)({[\s\S]*?})(\s*,\s*//\s*END_TIMETABLE_DATA)'
        
        if re.search(pattern, js_content):
            new_content = re.sub(
                pattern, 
                lambda m: m.group(1) + formatted_json + m.group(3), 
                js_content
            )
            
            with open(TIMETABLE_JS, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            logger.info("Successfully synced timetable to JS file")
            return True
        else:
            logger.warning("Could not find timetableData pattern in JS file")
            return False
            
    except Exception as e:
        logger.error(f"Error syncing to JS: {e}")
        return False

# ============================================
# AUTHENTICATION DECORATOR
# ============================================

def admin_required(f):
    """Decorator to require admin authentication"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('logged_in'):
            return jsonify({'error': 'Unauthorized', 'message': 'Admin tizimga kiring'}), 401
        return f(*args, **kwargs)
    return decorated_function

# ============================================
# ROUTES - STATIC FILES
# ============================================

@app.route('/')
def index():
    """Serve main page"""
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files"""
    try:
        return send_from_directory('.', path)
    except:
        return jsonify({'error': 'File not found'}), 404

# ============================================
# API - ADMIN AUTHENTICATION
# ============================================

@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    """Admin login endpoint"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'Ma\'lumot topilmadi'}), 400
        
        username = data.get('login', '').strip()
        password = data.get('password', '').strip()
        
        if username == ADMIN_LOGIN and password == ADMIN_PASS:
            session['logged_in'] = True
            session['username'] = username
            logger.info(f"Admin logged in: {username}")
            return jsonify({
                'success': True,
                'message': 'Muvaffaqiyatli kirdingiz'
            })
        else:
            logger.warning(f"Failed login attempt: {username}")
            return jsonify({
                'error': 'Xato',
                'message': 'Login yoki parol noto\'g\'ri'
            }), 401
            
    except Exception as e:
        logger.error(f"Login error: {e}")
        return jsonify({'error': 'Server xatoligi'}), 500

@app.route('/api/admin/logout', methods=['POST'])
def admin_logout():
    """Admin logout endpoint"""
    session.clear()
    logger.info("Admin logged out")
    return jsonify({'success': True, 'message': 'Tizimdan chiqdingiz'})

@app.route('/api/admin/status', methods=['GET'])
def admin_status():
    """Check admin login status"""
    is_logged_in = session.get('logged_in', False)
    return jsonify({
        'logged_in': is_logged_in,
        'username': session.get('username') if is_logged_in else None
    })

# ============================================
# API - TIMETABLE
# ============================================

@app.route('/api/timetable', methods=['GET'])
def get_timetable():
    """Get complete timetable data"""
    try:
        timetable = load_json_file(TIMETABLE_DB, {})
        return jsonify(timetable)
    except Exception as e:
        logger.error(f"Error getting timetable: {e}")
        return jsonify({'error': 'Jadval yuklanmadi'}), 500

@app.route('/api/timetable', methods=['POST'])
@admin_required
def save_timetable():
    """Save timetable data (Admin only)"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'Ma\'lumot topilmadi'}), 400
        
        # Save to JSON file
        if save_json_file(TIMETABLE_DB, data):
            # Sync to JS file for local fallback
            sync_timetable_to_js(data)
            
            logger.info("Timetable saved successfully")
            return jsonify({
                'success': True,
                'message': 'Jadval saqlandi'
            })
        else:
            return jsonify({'error': 'Saqlashda xatolik'}), 500
            
    except Exception as e:
        logger.error(f"Error saving timetable: {e}")
        return jsonify({'error': 'Server xatoligi'}), 500

# ============================================
# API - TEACHERS
# ============================================

@app.route('/api/teachers', methods=['GET'])
def get_teachers():
    """Get all teachers"""
    try:
        teachers = load_json_file(TEACHERS_DB, [])
        return jsonify(teachers)
    except Exception as e:
        logger.error(f"Error getting teachers: {e}")
        return jsonify({'error': 'O\'qituvchilar yuklanmadi'}), 500

@app.route('/api/teachers', methods=['POST'])
@admin_required
def add_teacher():
    """Add new teacher (Admin only)"""
    try:
        data = request.get_json()
        
        if not data or not data.get('name'):
            return jsonify({'error': 'O\'qituvchi nomi kiritilmadi'}), 400
        
        teachers = load_json_file(TEACHERS_DB, [])
        
        # Generate new ID
        new_id = max([t.get('id', 0) for t in teachers], default=0) + 1
        
        new_teacher = {
            'id': new_id,
            'name': data.get('name', '').strip(),
            'subject': data.get('subject', '').strip(),
            'schedule': data.get('schedule', {})
        }
        
        teachers.append(new_teacher)
        
        if save_json_file(TEACHERS_DB, teachers):
            logger.info(f"Teacher added: {new_teacher['name']}")
            return jsonify({
                'success': True,
                'teacher': new_teacher,
                'message': 'O\'qituvchi qo\'shildi'
            })
        else:
            return jsonify({'error': 'Saqlashda xatolik'}), 500
            
    except Exception as e:
        logger.error(f"Error adding teacher: {e}")
        return jsonify({'error': 'Server xatoligi'}), 500

@app.route('/api/teachers/<int:teacher_id>', methods=['DELETE'])
@admin_required
def delete_teacher(teacher_id):
    """Delete teacher (Admin only)"""
    try:
        teachers = load_json_file(TEACHERS_DB, [])
        
        # Filter out the teacher
        teachers = [t for t in teachers if t.get('id') != teacher_id]
        
        if save_json_file(TEACHERS_DB, teachers):
            logger.info(f"Teacher deleted: ID {teacher_id}")
            return jsonify({
                'success': True,
                'message': 'O\'qituvchi o\'chirildi'
            })
        else:
            return jsonify({'error': 'O\'chirishda xatolik'}), 500
            
    except Exception as e:
        logger.error(f"Error deleting teacher: {e}")
        return jsonify({'error': 'Server xatoligi'}), 500

# ============================================
# API - HEALTH CHECK
# ============================================

@app.route('/api/health', methods=['GET'])
def health_check():
    """Server health check"""
    return jsonify({
        'status': 'healthy',
        'server': 'Boysun IM Timetable Backend',
        'timestamp': datetime.now().isoformat(),
        'database_status': {
            'timetable': os.path.exists(TIMETABLE_DB),
            'teachers': os.path.exists(TEACHERS_DB)
        }
    })

# ============================================
# ERROR HANDLERS
# ============================================

@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Sahifa topilmadi'}), 404

@app.errorhandler(500)
def internal_error(e):
    logger.error(f"Internal error: {e}")
    return jsonify({'error': 'Server xatoligi'}), 500

# ============================================
# MAIN - LOCAL SERVER
# ============================================

if __name__ == '__main__':
    print("\n" + "="*70)
    print("  BOYSUN IM - DARS JADVALI BACKEND SERVER")
    print("="*70)
    print("\n✓ Server manzili: http://127.0.0.1:5000")
    print("✓ Admin panel: http://127.0.0.1:5000/admin-login.html")
    print("\n📋 Admin ma'lumotlari:")
    print(f"   Login: {ADMIN_LOGIN}")
    print(f"   Parol: {ADMIN_PASS}")
    print("\n📁 Ma'lumotlar:")
    print(f"   Jadval: {TIMETABLE_DB}")
    print(f"   O'qituvchilar: {TEACHERS_DB}")
    print("\n⚠️  Server to'xtatish: Ctrl+C bosing")
    print("="*70 + "\n")
    
    # Run development server
    app.run(
        debug=True,
        host='127.0.0.1',
        port=5000,
        threaded=True
    )
