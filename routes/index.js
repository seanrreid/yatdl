const express = require('express');
const router = express.Router();
const TasksModel = require('../models/Tasks');

/* GET home page. */
router.get('/', async (req, res, next) => {
    let taskData;

    !!req.session.user_id
        ? (taskData = await TasksModel.getAll(req.session.user_id))
        : (taskData = []);

    res.render('template', {
        locals: {
            title: 'Yet ANOTHER To-Do List',
            taskData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/home',
        },
    });
});

module.exports = router;
