const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6969;
const user = require('./user');
const discission = require('./discussion');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user', user)
app.use('/discission', discission)

app.listen(PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
mongoose.connect("mongodb://1:1@ds125469.mlab.com:25469/cssk", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect database success');
    }
});
app.get('/', (req, res) => {
    res.send("hi")
});