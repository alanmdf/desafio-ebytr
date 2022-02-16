const { createTaskService } = require('../services');

module.exports = async (req, res, _next) => {
    const insertedId = await createTaskService(req.body);
    return res.status(201).json({ _id: insertedId, ...req.body });
};