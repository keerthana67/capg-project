var express = require("express");
var router = express.Router();

var Room = require('../models/Room')


router.get('/room',function(req,res){
    Room.find().then((rooms) => {
        res.json(rooms)
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.get('/room/:roomType/:status',function(req,res){
    Room.find({roomType:req.params.roomType,status:req.params.status}).then((rooms) => {
        if(rooms){
        res.json(rooms)
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.get('/room/:roomType',function(req,res){
    Room.find({roomType:req.params.roomType}).then((rooms) => {
        if(rooms){
        res.json(rooms)
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.post('/room',function(req,res){
    var newRoom = {
        roomNo: req.body.roomNo,
        roomType: req.body.roomType,
        occupancy: req.body.occupancy,
        price: req.body.price,
        description: req.body.description,
        status: req.body.status
    }
    var room = new Room(newRoom)

    room.save().then(() => {
        console.log("New Room Created")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})

router.delete('/room/:id',function(req,res){
    Room.findByIdAndRemove(req.params.id).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

module.exports = router;