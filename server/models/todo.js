const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    text: {
        type: String
    },
    status: {
        type: String
    },
    order: {
        type: Number,
        default: 0
    }
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

module.exports.getTodos = (callback) => {
    Todo.find({}, callback);
};

module.exports.removeTodoById = (id, callback) => {
    Todo.findOneAndRemove({_id: id}, callback);
};

module.exports.addTodo = (newTodo, callback) => {
    newTodo.save(callback);
};

// module.exports.changeOrder = (previousIndex, newIndex, callback) => {
//
// };

