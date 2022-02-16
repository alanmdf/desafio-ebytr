const removeTaskModel = require('../models/removeTask.model');

module.exports = async (id) => {
    const deletedCount = await removeTaskModel(id);
    return deletedCount;
};