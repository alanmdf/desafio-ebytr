const { removeTaskModel } = require('../models');

module.exports = async (id) => {
    const deletedCount = await removeTaskModel(id);
    return deletedCount;
};