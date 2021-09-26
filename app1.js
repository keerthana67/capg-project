var express = require("express");
var mongoose = require("mongoose");

var app = express();
var cors = require("cors");
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//const jwt = require('jsonwebtoken')

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));



mongoose.connect('mongodb+srv://keerthana1:keerthu123@cluster0.cfwsn.mongodb.net/node-auth?retryWrites=true&w=majority',() =>{
    console.log("User Database Connected");
});

var route3 = require('./routes/auth');
app.use('/', route3)

app.listen(3001,() => {
    console.log('Listening to port for requests');
})

/*
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}*/

