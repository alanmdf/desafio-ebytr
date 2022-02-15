const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
    const conn = await connection();
    const { deletedCount } = await conn.collection('tasks').deleteOne({ _id: ObjectId(id) });
    return deletedCount;
};