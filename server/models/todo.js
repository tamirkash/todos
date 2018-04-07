const   mongoose = require('mongoose');
        autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const TodoSchema = mongoose.Schema({
    text: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    },
    order: {
        type: Number,
        index: true
    }
});

TodoSchema.plugin(autoIncrement.plugin, { model: 'Todo', field: 'order' });

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

module.exports.getTodos = (callback) => {
    Todo.find({}, 'status text', {sort: {order: 1}}, callback);
};

module.exports.removeTodoById = (id, callback) => {
    Todo.findOneAndRemove({_id: id}, callback);
};

module.exports.addTodo = (text, callback) => {
    const newTodo = Object.assign(new Todo(), {
        text
    });

    newTodo.save(callback);
};

module.exports.changeTodoStatus = (id, status, callback) => {
    Todo.findByIdAndUpdate(id, { status }, callback);
};

//not efficient
module.exports.reorder = (newTodos, callback) => {
    Todo.find({}, 'order', {sort: {order: 1}}, (err, todos) => {
        if(err) throw err;

        const bulkOps = [ ];

        for(let i = 0; i < todos.length; i++){
            bulkOps.push({
                updateOne: {
                    upsert: true,
                    filter: { _id: newTodos[i]._id },
                    update: { order: todos[i].order }
                }
            })
        }

        Todo.bulkWrite(bulkOps).then(callback());
    });
};

