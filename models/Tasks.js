const db = require('./conn.js');

class Task {
    constructor(id, task, complete, user_id) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.user_id = user_id;
    }

    static async getAll(user_id) {
        try {
            const query = `SELECT * FROM tasks WHERE user_id = ${user_id}`;
            const response = await db.any(query);
            return response;
        } catch (err) {
            return error;
        }
    }

    async addTask() {
        try {
            const query = `INSERT INTO tasks (task, complete, user_id) VALUES ('${this.task}', false, ${this.user_id})`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            return error;
        }
    }

    static async updateTask(task_id, status) {
        try {
            const query = `UPDATE tasks SET complete = ${status} WHERE id = ${task_id};`;
            const response = await db.result(query);
            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = Task;
