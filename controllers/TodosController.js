/**
 * Created by Justin on 12/01/2017.
 */
const Todos = require("../lib/Todos");
const Todo = require("../models/Todo");

const todos = new Todos();

class TodosController {

    /**
     * This function returns all Todos
     * @param req
     * @param res
     */
    static getAllToDos(req,res){
        todos.getAllToDos()
            .then(result => {
                res.status(200).send({success: result});
            })
            .catch(err => {
                res.status(500).send({error: err.message});
            })
    }

    /**
     * This function creates a new todo
     * @param req
     * @param res
     */
    static createToDo(req,res){
        if (!req.body) res.status(400).send("Please include a request body");
        todos.returnSingleToDoByQuery({title: req.body.title})
            .then(result => {
                if (!result){
                    const newTodo = new Todo(req.body);
                    return todos.createNew(newTodo);
                } else {
                    throw new Error("Todo already exists");
                }
            })
            .then(() => {
                res.status(201).send({success:"Todo created"});
            })
            .catch(err => {
                res.status(500).send({error: err.message});
            })
    }

    /**
     * This function gets a single todo
     * @param req
     * @param res
     */
    static getSingleToDo(req,res){
        if (!req.params.id) res.status(400).send("Please include an ID");
        todos.returnSingleToDoByID(req.params.id)
            .then(result => {
                res.status(200).send({success: result});
            })
            .catch(err => {
                res.status(500).send({error: err.message});
            })
    }

    /**
     * This function deletes a todo
     * @param req
     * @param res
     */
    static deleteTodo(req,res){
        if (!req.params.id) res.status(400).send("Please include an ID");
        todos.deleteToDoBy(req.params.id)
            .then(() => {
                res.status(200).send({success:"Todo has been deleted"});
            })
            .catch(err => {
                res.status(500).send({error: err.message});
            })
    }

    /**
     * This function edits a todo
     * @param req
     * @param res
     */
    static editToDo(req,res){
        if (!req.params.id) res.status(400).send("Please include an ID");
        todos.returnSingleToDoByID(req.params.id)
            .then(result => {
                if (!result){
                    throw new Error("Todo does not exist");
                } else {
                    const editTodo = new Todo(req.body);
                    return todos.createNew(editTodo);
                }
            })
            .then(() => {
                res.status(200).send({success: "Todo has been saved"});
            })
            .catch(err => {
                res.status(500).send({error: err.message});
            })
    }

}

module.exports = TodosController;