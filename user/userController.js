const User = require('./userSchema');
const {md5} = require('../utils')

let register = (username, password, isAdministrator, callback) => {
    password = md5(password).toLowerCase();
    let user = new User({username, password, isAdministrator});
    user.save((err) => {
        callback(err, user);
    })
};
let login = (username, password, callback) => {
    password = md5(password).toLowerCase();
    User.findOne({username, password}, callback)
};


module.exports = {
    login, register
}