const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressValidator = require('express-validator'),
    mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');
const db = mongoose.connection,
    app = express();

const todos = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(expressValidator());

app.use('/todos', todos);

app.listen(3001, () => console.log("Server started on port 3001..."));
