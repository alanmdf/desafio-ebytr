const getAllTasksModel = require('../models/getAllTasks.model');

module.exports = async () => {
    const tasksList = await getAllTasksModel();
    return tasksList;
};