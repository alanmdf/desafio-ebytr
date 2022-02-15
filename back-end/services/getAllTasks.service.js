const { getAllTasksModel } = require('../models');

module.exports = async () => {
    const tasksList = await getAllTasksModel();
    return tasksList;
};