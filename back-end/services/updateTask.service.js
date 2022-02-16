const { updateTaskModel } = require('../models');

module.exports = async (id, updateInfo) => {
    const modifiedCount = await updateTaskModel(id, updateInfo);
    return modifiedCount;
};