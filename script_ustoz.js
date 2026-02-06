const app = {
    selectedTeacher: null,
    selectedDay: null,
    teachers: [],

    init() {
        if (typeof teacherData !== 'undefined') {
            this.teachers = teacherData;
        } else {
            console.error("teacherData is undefined! Make sure teacher_data.js is loaded.");
        }
        this.renderTeachers();
        this.setupTheme();
        this.loadTheme();
    },

    renderTeachers() {
        const grid = document.getElementById('teachers-list');
        if (!grid) {
            console.warn("Element #teachers-list not found in DOM");
            return;
        }
        grid.innerHTML = this.teachers.map(t => `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="glass-card cursor-pointer p-3 d-flex align-items-center gap-3" onclick="app.selectTeacher('${t.name}')" style="cursor:pointer">
                    <div class="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style="width:50px; height:50px">
                        <i class="fas fa-user-tie text-primary"></i>
                    </div>
                    <div>
                        <h3 class="h6 mb-0 fw-bold">${t.name}</h3>
                        <p class="small text-muted mb-0">${t.subject || ''}</p>
                    </div>
                    <i class="fas fa-chevron-right ms-auto text-muted small"></i>
                </div>
            </div>
        `).join('');
    },

    selectTeacher(name) {
        this.selectedTeacher = this.teachers.find(t => t.name === name);
        document.getElementById('selected-teacher-name').innerText = name;
        this.renderDays();
        this.transition('teacher-selection-view', 'teacher-day-view');
    },

    renderDays() {
        const grid = document.getElementById('teacher-days-grid');
        grid.innerHTML = this.days.map(d => `
            <div class="col-6 col-md-4">
                <div class="day-square" onclick="app.selectDay('${d}')">
                    <h3>${d}</h3>
                </div>
            </div>
        `).join('');
    },

    selectDay(day) {
        this.selectedDay = day;
        document.getElementById('display-teacher-day').innerText = day;
        document.getElementById('display-teacher-name-title').innerText = this.selectedTeacher.name;
        this.renderHours();
        this.transition('teacher-day-view', 'teacher-schedule-view');
    },

    renderHours() {
        const body = document.getElementById('teacher-hour-body');
        const daySchedule = this.selectedTeacher.schedule[this.selectedDay] || ["", "", "", "", "", "", "", ""];
        body.innerHTML = daySchedule.map((cls, index) => `
            <tr>
                <td><span class="lesson-num">${index + 1}</span></td>
                <td><span class="${cls === '' ? 'text-muted opacity-25' : 'subject-name'} text-center">${cls}</span></td>
            </tr>
        `).join('');
    },

    showTeachers() {
        this.transition('teacher-day-view', 'teacher-selection-view');
    },

    showTeacherDays() {
        this.transition('teacher-schedule-view', 'teacher-day-view');
    },

    transition(from, to) {
        document.getElementById(from).classList.add('d-none');
        document.getElementById(to).classList.remove('d-none');
        window.scrollTo(0, 0);
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
        if (saved === 'light') {
            document.body.classList.add('light-mode');
            const btn = document.querySelector('#theme-toggle i');
            if (btn) btn.className = 'fas fa-moon';
        }
    },
    days: ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
};

document.addEventListener('DOMContentLoaded', () => app.init());
