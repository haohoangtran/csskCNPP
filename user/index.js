const router = require('express').Router();
const {login, register} = require('./userController')
const {verifyToken, getToken} = require('../utils')

router.post('/login', (req, res) => {
    let {username, password} = req.body
    login(username, password, (err, user) => {
        if (err) {
            res.send({
                code: 500,
                err,
                status: false,
                msg: null
            })
        } else if (user) {
            res.send({
                status: true,
                msg: "Xử lý thành công",
                token: getToken(user)
            })
        } else {
            res.send(
                {
                    status: false,
                    code: 404,
                }
            )
        }
    })
});
router.post('/register', (req, res) => {
    let {username, password, isAdministrator} = req.body;
    if (username.length < 5) {
        res.send({status: false, msg: "Username phai co it nhat 5 ky tu"})
    } else if (password.length < 8) {
        res.send({status: false, msg: "password phai co it nhat 8 ky tu"})
    } else {
        register(username, password, Boolean(isAdministrator), (err, user) => {
            let response = {}
            if (err) {
                response = {
                    status: false,
                    code: 500,
                    err: err.errmsg
                }
            } else if (user) {
                response = {
                    status: true,
                    code: 200,
                    token: getToken(user)
                }
            } else {
                response = {
                    status: false,
                    code: 404,
                }
            }
            res.send(response);
        })
    }
});


module.exports = router;