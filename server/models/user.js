const   mongoose = require('mongoose'),
        bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String
    }
});

UserSchema.post('save', (error, doc, next) => {
    const regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i,
        match = error.message.match(regex),
        indexName = match[1] || match[2];
    if (error.code === 11000) {
        next(new Error(indexName === "username" ? "dup_username" : "dup_email"));
    } else {
        next(error);
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

const findOne = (query, callback) => {
    User.findOne(query, callback);
}

module.exports.getUserByUsername = (username, callback) => {
    findOne({username}, callback);
}

module.exports.getUserByEmail = (email, callback) => {
    findOne({email}, callback);
}

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}