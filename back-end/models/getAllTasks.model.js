const connection = require('./connection');

module.exports = async () => {
    const conn = await connection();
    const tasksList = await conn.collection('tasks').find().toArray();

    return tasksList;
};