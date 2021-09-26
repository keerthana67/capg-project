var express = require("express");
var router = express.Router();

var Guest = require('../models/Guest')

router.get('/guests',function(req,res){
    Guest.find().then((guests) => {
        res.json(guests)
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.get('/guest/:id',function(req,res){
    Guest.findById(req.params.id).then((guests) => {
        if(guests){
        res.json(guests)
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.post('/guest',function(req,res){
    var newGuest = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        company: req.body.company,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address
    }
    var guest = new Guest(newGuest)

    guest.save().then(() => {
        console.log("New Guest Created")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})

router.delete('/guest/:id',function(req,res){
    Guest.findByIdAndRemove(req.params.id).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

module.exports = router;