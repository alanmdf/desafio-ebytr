const getAllTasksService = require('./getAllTasks.service');
const createTaskService = require('./createTask.service');
const removeTaskService = require('./removeTask.service');
const updateTaskService = require('./updateTask.service');

module.exports = {
    getAllTasksService,
    createTaskService,
    removeTaskService,
    updateTaskService,
};