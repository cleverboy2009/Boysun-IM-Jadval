"""
Flask Backend for Boysun School Website
Provides security features and contact form handling
"""
import os
import re
from datetime import datetime
from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_talisman import Talisman
from dotenv import load_dotenv
import logging
import json
from flask import session

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, 
            static_folder='.',
            static_url_path='',
            template_folder='.')

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(32).hex())
app.config['WTF_CSRF_TIME_LIMIT'] = None  # CSRF tokens don't expire

# Initialize security extensions
csrf = CSRFProtect(app)

# Rate limiting
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

# Security headers with Talisman
csp = {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com'],
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdnjs.cloudflare.com'],
    'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
    'img-src': ["'self'", 'data:', 'https:'],
    'connect-src': ["'self'"]
}

Talisman(app, 
         content_security_policy=csp,
         force_https=False)  # Set to True in production with HTTPS

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Admin Credentials (as requested)
ADMIN_LOGIN = "admin"
ADMIN_PASS = "boysun2026"

# Simple JSON Databases
TEACHERS_DB = 'teachers.json'
TIMETABLE_DB = 'timetable.json'
TIMETABLE_JS = 'timetable-data.js'

def sync_timetable_js(data):
    """Sync changes to the static JS file for local usage"""
    if not os.path.exists(TIMETABLE_JS):
        return
        
    try:
        with open(TIMETABLE_JS, 'r', encoding='utf-8') as f:
            content = f.read()
        
        formatted_data = json.dumps(data, ensure_ascii=False, indent=4)
        
        # Regex to find: timetableData: { ... }, // END_TIMETABLE_DATA
        # Using a pattern that matches the specific structure in timetable-data.js
        pattern = r'(timetableData:\s*)({[\s\S]*?})(\s*,\s*// END_TIMETABLE_DATA)'
        
        if re.search(pattern, content):
            new_content = re.sub(pattern, lambda m: m.group(1) + formatted_data + m.group(3), content)
            with open(TIMETABLE_JS, 'w', encoding='utf-8') as f:
                f.write(new_content)
            logger.info("Successfully synced timetable-data.js")
    except Exception as e:
        logger.error(f"Failed to sync timetable-data.js: {e}")

def load_db(filename, default=[]):
    if not os.path.exists(filename):
        with open(filename, 'w') as f:
            json.dump(default, f)
    with open(filename, 'r') as f:
        return json.load(f)

def save_db(filename, data):
    with open(filename, 'w') as f:
        json.dump(data, f)


def sanitize_input(text, max_length=1000):
    """Sanitize user input to prevent XSS"""
    if not text:
        return ""
    
    # Remove any HTML tags
    text = re.sub(r'<[^>]*>', '', str(text))
    
    # Limit length
    text = text[:max_length]
    
    # Remove potentially dangerous characters
    text = text.replace('<', '').replace('>', '').replace('"', '').replace("'", '')
    
    return text.strip()


# Admin API
@app.route('/api/admin/login', methods=['POST'])
@csrf.exempt
def admin_login():
    data = request.get_json()
    if data.get('login') == ADMIN_LOGIN and data.get('password') == ADMIN_PASS:
        session['logged_in'] = True
        return jsonify({'success': True})
    return jsonify({'error': 'Xato login yoki parol'}), 401

@app.route('/api/admin/logout', methods=['POST'])
def admin_logout():
    session.pop('logged_in', None)
    return jsonify({'success': True})

@app.route('/api/admin/status', methods=['GET'])
def admin_status():
    return jsonify({'logged_in': session.get('logged_in', False)})

# Teachers API
@app.route('/api/teachers', methods=['GET'])
def get_teachers():
    return jsonify(load_db(TEACHERS_DB))

@app.route('/api/teachers', methods=['POST'])
@admin_required
@csrf.exempt
def add_teacher():
    data = request.get_json()
    teachers = load_db(TEACHERS_DB)
    new_id = max([t.get('id', 0) for t in teachers], default=0) + 1
    new_teacher = {
        'id': new_id,
        'name': sanitize_input(data.get('name'), 100),
        'subject': sanitize_input(data.get('subject'), 100),
        'image': data.get('image')
    }
    teachers.append(new_teacher)
    save_db(TEACHERS_DB, teachers)
    return jsonify({'success': True})

@app.route('/api/teachers/<int:tid>', methods=['DELETE'])
@admin_required
@csrf.exempt
def delete_teacher(tid):
    teachers = load_db(TEACHERS_DB)
    teachers = [t for t in teachers if t['id'] != tid]
    save_db(TEACHERS_DB, teachers)
    return jsonify({'success': True})


# Timetable API
@app.route('/api/timetable', methods=['GET'])
def get_timetable():
    if not os.path.exists(TIMETABLE_DB):
        return jsonify({})
    with open(TIMETABLE_DB, 'r', encoding='utf-8') as f:
        return jsonify(json.load(f))

@app.route('/api/timetable', methods=['POST'])
@csrf.exempt
def save_timetable():
    # Check auth: accept session login OR static token from legacy frontend
    auth_header = request.headers.get('Authorization')
    is_authorized = False
    
    if session.get('logged_in'):
        is_authorized = True
    elif auth_header == 'Bearer admin_token_boysun2026':
        is_authorized = True
        
    if not is_authorized:
        return jsonify({'error': 'Unauthorized'}), 401

    data = request.get_json()
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(TIMETABLE_DB), exist_ok=True)
    
    with open(TIMETABLE_DB, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        
    # Sync to JS file
    sync_timetable_js(data)
        
    return jsonify({'success': True})


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    })


# Error handlers
@app.errorhandler(429)
def ratelimit_handler(e):
    """Handle rate limit errors"""
    return jsonify({
        'success': False,
        'error': 'Juda ko\'p so\'rov yuborildi. Iltimos bir oz kuting.'
    }), 429


@app.errorhandler(400)
def bad_request_handler(e):
    """Handle bad requests"""
    return jsonify({
        'success': False,
        'error': 'Noto\'g\'ri so\'rov'
    }), 400


@app.errorhandler(500)
def internal_error_handler(e):
    """Handle internal errors"""
    logger.error(f"Internal error: {str(e)}")
    return jsonify({
        'success': False,
        'error': 'Server xatoligi. Iltimos qaytadan urinib ko\'ring.'
    }), 500


if __name__ == '__main__':
    # Development server
    app.run(debug=True, host='127.0.0.1', port=5000)
