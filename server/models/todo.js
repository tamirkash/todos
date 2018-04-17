const   mongoose = require('mongoose'),
        autoIncrement = require('mongoose-auto-increment');
require('mongoose-double')(mongoose);
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
        type: Number
    },
    owner: {
        type: String,
        index: true
    }
});

TodoSchema.plugin(autoIncrement.plugin, { model: 'Todo', field: 'order' });

const Todo = module.exports = mongoose.model('Todo', TodoSchema);


module.exports.getTodos = (owner, callback) => {
    Todo.find({owner}, 'status text', {sort: {order: 1}}, callback);
};

module.exports.removeTodoById = (owner, id, callback) => {
    Todo.findOneAndRemove({owner, _id: id}, callback);
};

module.exports.addTodo = (owner, text, callback) => {
    const newTodo = Object.assign(new Todo(), {
        text,
        owner
    });

    newTodo.save(callback);
};

module.exports.changeTodoStatus = (owner, id, status, callback) => {
    Todo.findOneAndUpdate({owner, _id: id}, { status }, callback);
};

//not efficient
module.exports.reorder = (owner, newTodos, callback) => {
    Todo.find({owner}, 'order', {sort: {order: 1}}, (err, todos) => {
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

// module.exports.reorder = (todos, callback) => {
//     let newOrder;
//
//     if(todos[1] && todos[2]){
//         Todo.findOne({_id: todos[1]._id}, (err, firstTodo) => {
//             if(err) throw err;
//             Todo.findOne({_id: todos[2]._id}, (err, secondTodo) => {
//                if(err) throw err;
//                newOrder = firstTodo.order + (parseFloat((secondTodo.order - firstTodo.order).toFixed(4)) / 2);
//                Todo.findByIdAndUpdate(todos[0]._id, { order: newOrder }, callback);
//             });
//         });
//     } else if(todos[1]){       //new order is last
//         Todo.findOne({_id: todos[1]._id}, (err, last) => {
//             if(err) throw err;
//             newOrder = last.order + 0.0005;
//             Todo.findByIdAndUpdate(todos[0]._id, { order: newOrder }, callback);
//         });
//     } else {                    //new order is first
//         Todo.findOne({_id: todos[2]._id}, (err, first) => {
//             if(err) throw err;
//             newOrder = parseFloat((first.order - 0.0005).toFixed(4));
//             Todo.findByIdAndUpdate(todos[0]._id, { order: newOrder }, callback);
//         });
//     }
// };