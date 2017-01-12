/**
 * Created by Justin on 12/01/2017.
 */

class Todo {

    /**
     * @param obj - {
         * title: String,
         * content: String,
         * due: Date
     * }
     * @throws An error is thrown if the class cannot be initialized
     */
    constructor(obj){
        if (!obj.hasOwnProperty('title')){
            throw new Error("A title is required");
        } else if (typeof obj.title != "string"){
            throw new Error("The title must be a string");
        } else {
            this.title = obj.title;
        }

        if (!obj.hasOwnProperty('content')){
            throw new Error("A content is required");
        } else if (typeof obj.content != "string"){
            throw new Error("The content must be a string");
        } else {
            this.content = obj.content;
        }

        if (!obj.hasOwnProperty('due')){
            throw new Error("An due is required");
        } else if (!obj.due instanceof Date){
            throw new Error("The due must be a date");
        } else {
            this.due = obj.due;
        }

        this.createdDate = obj.createdDate || new Date();
        this.done = obj.done || false;
    }

}

module.exports = Todo;