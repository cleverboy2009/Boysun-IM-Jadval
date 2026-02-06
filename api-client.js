/**
 * API Client for Timetable Management
 */
const apiClient = {
    // We use relative path so it works on any PHP server (localhost or hosting)
    // Updated to point to Python Backend (app.py)
    baseUrl: '',
    token: 'admin_token_boysun2026',

    getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        };
    },

    async getTimetable() {
        const response = await fetch(`${this.baseUrl}/api/timetable?t=${Date.now()}`, {
            headers: this.getHeaders()
        });
        if (!response.ok) throw new Error('Failed to fetch timetable');
        return await response.json();
    },

    async updateTimetable(data) {
        const response = await fetch(`${this.baseUrl}/api/timetable`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    async getTeachers() {
        const response = await fetch(`${this.baseUrl}/api/teachers?t=${Date.now()}`, {
            headers: this.getHeaders()
        });
        if (!response.ok) throw new Error('Failed to fetch teachers');
        return await response.json();
    },

    async updateTeachers(data) {
        const response = await fetch(`${this.baseUrl}/api/teachers`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    async validateSession() {
        try {
            const response = await fetch(`${this.baseUrl}/api/admin/status`, {
                headers: this.getHeaders()
            });
            if (!response.ok) return false;
            const data = await response.json();
            return data.logged_in === true;
        } catch (e) {
            return false;
        }
    }
};
