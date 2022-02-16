const { updateTaskService } = require('../services');

module.exports = async (req, res, _next) => {
    const { id } = req.params;
    const modifiedCount = await updateTaskService(id, req.body);
    if (modifiedCount === 1) {
        return res.status(200).json({ message: 'Task updated successfully' });
    } 
    return res.status(404).json({ message: 'Task not found' });
};