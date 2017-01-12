/**
 * Created by Justin on 12/01/2017.
 */
const db = require("../MongoClient");
const ObjectID = require("mongodb").ObjectID;
class Todos {

    constructor(){
        this.collection = db.prototype.returnDB().collection("todos");
    }

    /**
     * This function gets all todos
     * @returns {Promise}
     */
    getAllToDos(){
        return new Promise(
            (resolve, reject) => {
                this.collection.find().toArray()
                    .then(result => {
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        )
    }

    /**
     * This function searches for a todo by ID
     * @param id
     * @returns {Promise}
     */
    returnSingleToDoByID(id){
        return new Promise(
            (resolve, reject) => {
                this.collection.find({_id: new ObjectID(id)}).limit(1).next()
                    .then(result => {
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        )
    }

    /**
     * This function searches for a Todo by query
     * @param query
     * @returns {Promise}
     */
    returnSingleToDoByQuery(query){
        return new Promise(
            (resolve, reject) => {
                this.collection.find(query).limit(1).next()
                    .then(result => {
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }

    /**
     * This function creates a new Todo
     * @param todo
     * @returns {Promise}
     */
    createNew(todo){
        return new Promise(
            (resolve, reject) => {
                this.collection.insertOne(todo)
                    .then(() => {
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        )
    }

    /**
     * This function deletes a todo
     * @param id
     * @returns {Promise}
     */
    deleteToDoBy(id){
        return new Promise(
            (resolve, reject) => {
                this.collection.remove({_id: new ObjectID(id)})
                    .then(() => {
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        )
    }

    /**
     * This function edits an existing todo
     * @param id
     * @param todo
     * @returns {Promise}
     */
    editExistingTodoBy(id, todo){
        return new Promise(
            (resolve, reject) => {
                this.collection.updateOne({_id: new ObjectID(id)},{$set: todo})
                    .then(() => {
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        )
    }

}

module.exports = Todos;