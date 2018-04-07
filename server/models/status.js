const mongoose = require('mongoose');

StatusSchema = mongoose.Schema({
    status: {
        type: String
    }
});

const Status = module.exports = mongoose.model('Status', StatusSchema);

module.exports.getStatusList = (callback) => {
    Status.find({}, callback);
};