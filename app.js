var express = require("express");
var app = express();
var cors = require("cors");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

var mongoose = require("mongoose");
//var mongoose1 = require("mongoose");

mongoose.connect('mongodb+srv://keerthana1:keerthu123@cluster0.cfwsn.mongodb.net/node-auth?retryWrites=true&w=majority',() =>{
    console.log("Hotel Database Connected");
});



var route = require('./routes/room');
app.use('/', route)
var route1 = require('./routes/guests');
app.use('/', route1)
var route2 = require('./routes/booking');
const { response } = require("express");
app.use('/', route2)
//var route3 = require('./user/auth');
//app.use('/', route3)


app.listen(3000,() => {
    console.log('Listening to port for requests');
})