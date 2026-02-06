/**
 * BOYSUN IM - TIMETABLE SCRIPT v4.0
 * Features: Mobile Stability, Match Main Site Design, Enhanced Security
 */

const app = {
    selectedClass: null,
    classes: ["5-A", "5-B", "6-A", "7-A", "7-B", "7-V", "8-A", "8-B", "8-V", "9-A", "9-B", "9-V", "10-A", "10-B", "10-V", "11-A", "11-B", "11-V"],
    days: ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma"],

    init() {
        this.renderClasses();
        this.renderTeachers();
        this.setupTheme();
        this.applySecurity();
        this.loadTheme();
    },

    // Teachers data is now handled in teacher_data.js and via API in ustozlar.html

    renderClasses() {
        const grid = document.getElementById('classes-grid');
        if (!grid) return;
        grid.innerHTML = this.classes.map(c => `
            <div class="col-6 col-md-3 col-lg-2">
                <div class="class-square" onclick="app.selectClass('${c}')">
                    <h3>${c}</h3>
                </div>
            </div>
        `).join('');
    },


    selectTeacher(name) {
        window.location.href = `teacher_jadval.html?name=${encodeURIComponent(name)}`;
    },

    selectClass(className) {
        this.selectedClass = className;
        document.getElementById('selected-class-title').innerText = className;
        this.renderDays();
        this.transition('class-grid-container', 'day-grid-container');
        document.getElementById('teachers-grid-container').classList.add('d-none');
        document.getElementById('updates-section')?.classList.add('d-none');
    },

    renderDays() {
        const grid = document.getElementById('days-grid');
        if (!grid) return;
        grid.innerHTML = this.days.map(d => `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="day-square" onclick="app.selectDay('${d}')">
                    <h3>${d}</h3>
                </div>
            </div>
        `).join('');
    },

    selectDay(day) {
        window.location.href = `day.html?c=${encodeURIComponent(this.selectedClass)}&d=${encodeURIComponent(day)}`;
    },

    showClasses() {
        this.transition('day-grid-container', 'class-grid-container');
        document.getElementById('teachers-grid-container').classList.remove('d-none');
        document.getElementById('updates-section')?.classList.remove('d-none');
    },

    transition(fromId, toId) {
        document.getElementById(fromId).classList.add('d-none');
        const to = document.getElementById(toId);
        to.classList.remove('d-none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    setupTheme() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        btn.onclick = () => {
            const isLight = document.body.classList.toggle('light-mode');
            btn.querySelector('i').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        };
    },

    loadTheme() {
        const saved = localStorage.getItem('theme');
        const btn = document.getElementById('theme-toggle');
        if (saved === 'light') {
            document.body.classList.add('light-mode');
            if (btn) btn.querySelector('i').className = 'fas fa-moon';
        }
    },

    toggleUpdates() {
        window.location.href = 'updates.html';
    },

    applySecurity() {
        // Prevent Right Click
        document.addEventListener('contextmenu', e => e.preventDefault());

        // Anti-DevTools Simple Check
        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && (e.key === 'u' || (e.shiftKey && e.key === 'I'))) {
                e.preventDefault();
            }
            if (e.key === 'F12') e.preventDefault();
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
