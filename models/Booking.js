var mongoose = require("mongoose");

var BookingSchema = mongoose.Schema({
    roomNo:{
        type: Number,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    children:{
        type: Number,
        require: true
    },
    adult:{
        type: Number,
        require: true
    },
    checkin:{
        type: Date,
        require: true
    },
    checkout:{
        type: Date,
        require: true
    },
    days:{
        type: Number,
        require: true
    },
});

var Booking = module.exports = mongoose.model('Booking',BookingSchema)