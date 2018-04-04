let mongoose = require('mongoose');

let TodoSchema = mongoose.Schema({
    text: {
        type: String
    },
    status: {
        type: String
    }
});

let Todo = module.exports = mongoose.model('Todo', TodoSchema);

module.exports.getTodos = (callback) => {
    Todo.find({}, callback);
};

module.exports.removeTodoByText = (isbn, callback) => {
    Todo.remove({text: text}, callback);
};

module.exports.addTodo = (newTodo, callback) => {
    newTodo.save(callback);
};
