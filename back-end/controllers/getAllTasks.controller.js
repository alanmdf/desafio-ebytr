const { getAllTasksService } = require('../services');

module.exports = async (_req, res, _next) => {
    const tasksList = await getAllTasksService();
    return res.status(200).json(tasksList);
};