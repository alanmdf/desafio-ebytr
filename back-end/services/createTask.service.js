const { createTaskModel } = require('../models');

module.exports = async (newTask) => {
    const insertedId = await createTaskModel(newTask);
    return insertedId;
};
