var mongoose = require("mongoose");

var RoomSchema = mongoose.Schema({

    roomNo:{
        type: Number,
        require: true
    },
    roomType:{
        type: String,
        require: true
    },
    occupancy:{
        type: Number,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    status:{
        type: String,
        require: true
    },
});

var Room = module.exports = mongoose.model('Room',RoomSchema)