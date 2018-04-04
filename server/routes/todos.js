const express = require('express'),
    router = express.Router(),
    Todo = require('../models/todo');

router.get('/', (req, res) => {
    Todo.getTodos((err, todos) => {
        if(err) throw err;
        res.json({todos: todos});
    });
});

router.delete('/remove/:text', (req, res) => {
    Todo.removeTodoByText(req.params.text, (err, todo) => {
        if(err) throw err;
        res.status(200).send();
    })
});

router.post('/add', (req, res) => {
    let newTodo = Object.assign(new Todo(), req.body.todo);

    Todo.addTodo(newTodo, (err, todo) => {
        if(err) throw err;
        res.status(200).send();
    })
});

module.exports = router;