const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './config.env' });

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.ATLAS_URI;

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('desafioEbytr');
    return db;
    }));

module.exports = connection;