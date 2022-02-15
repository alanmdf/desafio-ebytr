// Código retirado do tutorial MERN fornecido pelo MongoDB: https://www.mongodb.com/languages/mern-stack-tutorial

const { MongoClient } = require('mongodb');

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
let dbConnection;
 
module.exports = {
  connectToServer(callback) {
    client.connect((err, db) => {
      // Verify we got a good "db" object
      if (db) {
        dbConnection = db.db('myFirstDatabase');
        console.log('Successfully connected to MongoDB.'); 
      }
      return callback(err);
         });
  },
 
  getDb() {
    return dbConnection;
  },
};