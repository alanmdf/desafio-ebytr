const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, { name, status }) => {
    const conn = await connection();
    const { modifiedCount } = await conn.collection('tasks').updateOne(
        { _id: ObjectId(id) },
        { $set: { name, status, updatedAt: new Date().toISOString() } },
    );

    return modifiedCount;
};