const express = require('express');
const router = express.Router();
const TasksModel = require('../models/Tasks');

router.post('/add', async (req, res) => {
    const { task_content } = req.body;
    const user_id = req.session.user_id;
    const newTask = new TasksModel(null, task_content, null, user_id);
    const response = await newTask.addTask();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

router.post('/update', async (req, res) => {
    for (let key in req.body) {
        const taskId = key.split('task-');
        await TasksModel.updateTask(taskId[1], req.body[key]);
    }
    res.redirect('/');
});


module.exports = router;
