/**
 * Created by Justin on 12/01/2017.
 */
const db = require("../MongoClient");
class Todos {

    constructor(){
        this.collection = db.prototype.returnDB().collection("todos");
    }



}

module.exports = Todos;