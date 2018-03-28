const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    discission:{
        type: Schema.Types.ObjectId,
        ref: "Discission"
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


module.exports = mongoose.model('Comment', comment);