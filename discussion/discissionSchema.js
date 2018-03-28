const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussion = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        require: true
    },
    dateCreate: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Discission', discussion);