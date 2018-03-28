const Discission = require('./discissionSchema');

let createDiscission = (idUser, content, callback) => {
    let dis = new Discission({user: idUser, content});
    dis.save(err => {
        callback(err, dis);
    });
};

let getDiscissionById = (id, callback) => {
    Discission.findById(id).populate("user").exec(callback);
};


module.exports = {
    createDiscission, getDiscissionById
}