const express = require('express'),
    router = express.Router(),
    Todo = require('../models/todo'),
    Status = require('../models/status');

router.use((req, res, next) => {
    if(req.method === 'OPTIONS' || req.isAuthenticated()){
        next();
    } else {
        res.status(401).send();
    }
});

router.delete('/:id', (req, res) => {
    Todo.removeTodoById(req.user.username, req.params.id, (err, todo) => {
        if(err) throw err;
        res.status(200).send();
    })
});

router.post('/', (req, res) => {
    Todo.addTodo(req.user.username, req.body.text, (err, todo) => {
        if(err) throw err;
        res.json({todo})
    })
});

router.put('/reorder', (req, res) => {
    Todo.reorder(req.user.username, req.body.todos, (err, todos) => {
        if(err) throw err;
        res.status(200).send();
    })
});

//input: arr[0] change this todo order, arr[1] before, arr[2] after
// router.put('/reorder', (req, res) => {
//     //reorder needed
//     if(req.body.todos[1] || req.body.todos[2]) {
//         Todo.reorder(req.body.todos, (err, todos) => {
//             if (err) throw err;
//             res.status(200).send();
//         })
//     } else {
//         res.status(200).send();
//     }
// });

router.put('/status', (req, res) => {
    Todo.changeTodoStatus(req.user.username, req.body.id, req.body.status, (err, todo) => {
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

router.get('/', (req, res) => {
        Todo.getTodos(req.user.username, (err, todos) => {
            if(err) throw err;
            res.json({todos});
        });
});

module.exports = router;