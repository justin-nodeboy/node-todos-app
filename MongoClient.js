/**
 * Created by Justin on 11/12/2016.
 * This class and objects return a global MongoDB singleton
 */

const mongodb = require('mongodb');
const client = mongodb.MongoClient;
const connection = process.env.MONGODB_URI;

class MongoClient {}

/**
 * Connects to the Database
 */
MongoClient.prototype.connectDB = function (callback){
    client.connect(connection, function (err, db) {
        if (err) {
            console.log(err);
            console.log("Failed to connect");
            callback(err);
        } else {
            MongoClient.prototype.db = db;
            console.log("Global Connection Created");
            callback(null);
        }
    });
};

/**
 * Returns the database
 * @returns {*}
 */
MongoClient.prototype.returnDB = function (){
    return this.db;
};


module.exports = MongoClient;
