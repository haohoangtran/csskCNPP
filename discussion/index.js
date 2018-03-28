const router = require('express').Router();
const {createDiscission, getDiscissionById} = require('./discissionController')
const {verifyToken, getToken} = require('../utils')
const {commentDiscission, getAllCommentInDis} = require('../comment/commentController')
router.post('/post', (req, res) => {
    // post nội dung là html, token lúc login trả về.
    let {token, content} = req.body;
    let user = verifyToken(token);
    if (!content) {
        res.send({status: false, msg: "content undefine"})
    } else if (user) {
        createDiscission(user._id, content, (err, dis) => {
            if (err) {
                res.send({status: false, err})
            } else {
                res.send({status: true, id: dis._id})
            }
        });
    } else {
        res.send({status: false, msg: "user undefine"})
    }
});
router.post('/comment', (req, res) => {
    //id của bài đăng, token lúc login register gửi về, nội dung đăng
    let {id, token, content} = req.body;
    let user = verifyToken(token);
    if (!content) {
        res.send({status: false, msg: "content undefine"})
    } else if (user) {
        commentDiscission(id, user._id, content, (err, result) => {
            if (err) {
                res.send({status: false, err})
            } else {
                res.send({status: true, result})
            }
        });
    } else {
        res.send({status: false, msg: "user undefine"})
    }
});
router.get('/getComment', (req, res) => {
    // id dis truyen qua params getComment?id=12312321
    let id = req.query.id;
    getAllCommentInDis(id, (err, docs) => {
        if (err) {
            res.send({status: false, err})
        } else
            res.send({
                status: true,
                comments: docs
            })
    })
});
router.get('/post', (req, res) => {
    let {id} = req.query;
    getDiscissionById(id, (err, post) => {
        if (err) {
            res.send({err, status: false})
        } else {
            res.send({
                status: true,
                post
            })
        }
    })
});

module.exports = router;