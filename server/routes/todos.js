const express = require('express'),
    router = express.Router(),
    Todo = require('../models/todo');

router.get('/', (req, res) => {
    Todo.getTodos((err, todos) => {
        if(err) throw err;
        res.json({todos: todos});
    });
});

router.delete('/remove/:id', (req, res) => {
    Todo.removeTodoById(req.params.id, (err, todo) => {
        if(err) throw err;
        res.status(200).send();
    })
});

router.post('/add', (req, res) => {
    const newTodo = Object.assign(new Todo(), {
        text: req.body.text,
        status: 'Open'
    });

    Todo.addTodo(newTodo, (err, todo) => {
        if(err) throw err;
        res.json({todo: todo})
    })
});

// router.put('/change', (req, res) => {
//     Todo.changeOrder(req.params.previousIndex, req.params.newIndex, (err, todos) => {
//         if(err) throw err;
//         res.status(200).send();
//     })
// });

module.exports = router;