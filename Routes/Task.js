const express = require('express');
const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } = require('../Controller/Task.js');
const router = express.Router();

// Define routes and map them to their respective controller functions
router.route('/')
    .get(getAllTasks)   // GET /api/v1/tasks - Fetch all tasks
    .post(createTask);  // POST /api/v1/tasks - Create a new task

router.route('/:id')
    .get(getSingleTask)  // GET /api/v1/tasks/:id - Fetch a single task by ID
    .put(updateTask)     // PUT /api/v1/tasks/:id - Update a task by ID
    .delete(deleteTask); // DELETE /api/v1/tasks/:id - Delete a task by ID

module.exports = router;
