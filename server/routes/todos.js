const express = require('express'),
    router = express.Router(),
    Todo = require('../models/todo'),
    Status = require('../models/status');

router.get('/', (req, res) => {
    Todo.getTodos((err, todos) => {
        if(err) throw err;
        res.json({todos});
    });
});

router.delete('/remove/:id', (req, res) => {
    Todo.removeTodoById(req.params.id, (err, todo) => {
        if(err) throw err;
        res.status(200).send();
    })
});

router.post('/add', (req, res) => {
    Todo.addTodo(req.body.text, (err, todo) => {
        if(err) throw err;
        res.json({todo})
    })
});

router.put('/reorder', (req, res) => {
    Todo.reorder(req.body.todos, (err, todos) => {
        if(err) throw err;
        res.status(200).send();
    })
});

router.put('/status', (req, res) => {
    Todo.changeTodoStatus(req.body.id, req.body.status, (err, todo) => {
        if(err) throw err;
        res.status(200).send();
    })
});

router.get('/status-list', (req, res) => {
    Status.getStatusList((err, statusList) => {
        if(err) throw err;
        res.json({statusList})
    });
});

module.exports = router;