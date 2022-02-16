const updateTaskModel = require('../models/updateTask.model');

module.exports = async (id, updateInfo) => {
    const modifiedCount = await updateTaskModel(id, updateInfo);
    return modifiedCount;
};