/**
 * Created by Justin on 12/01/2017.
 */
const express = require('express');
const router = express.Router();
const Todos = require("../controllers/TodosController");

//This is the todos route
router.route('/todos')
    .get(Todos.getAllToDos)
    .post(Todos.createToDo);

router.route('/todos/:id')
    .get(Todos.getSingleToDo)
    .put(Todos.editToDo)
    .delete(Todos.deleteTodo);


module.exports = router;