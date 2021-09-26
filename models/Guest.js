var mongoose = require("mongoose");

var GuestSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    phoneNumber:{
        type: Number,
        require: true,
    },
    company:{
        type: String,
    },
    email:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
});
var Guest = module.exports = mongoose.model('Guest',GuestSchema)