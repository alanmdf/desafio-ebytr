const createTaskModel = require('../models/createTask.model');

module.exports = async (newTask) => {
    const insertedId = await createTaskModel(newTask);
    return insertedId;
};
