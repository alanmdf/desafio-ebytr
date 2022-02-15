const { removeTaskService } = require('../services');

module.exports = async (req, res, _next) => {
    const deletedCount = await removeTaskService(req.params.id);
    if (deletedCount === 1) {
        return res.status(200).json({ message: 'Task deleted successfully' });
    } 
    return res.status(404).json({ message: 'Task not found' });
};