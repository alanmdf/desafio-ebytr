const connection = require('./connection');

module.exports = async (newTask) => {
    const conn = await connection();
    const { insertedId } = await conn.collection('tasks').insertOne({ ...newTask });
    return insertedId;
};