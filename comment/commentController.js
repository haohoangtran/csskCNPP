const Comment = require('./commentSchema');

let commentDiscission = (idDis, idUser, content, callback) => {
    let comment = new Comment({discission: idDis, user: idUser, content})
    comment.save(err => {
        callback(err, comment);
    })
};
let getAllCommentInDis = (idDis, callback) => {
    Comment.find({discission: idDis}).populate("user").exec(callback)
}

module.exports = {
    commentDiscission,getAllCommentInDis
}