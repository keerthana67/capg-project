var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var axios = require("axios");

var Booking = require('../models/Booking');
const { response } = require("express");

router.get('/booking',function(req,res){
    Booking.find().then((bookings) => {
        res.json(bookings)
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.get('/booking/:id',function(req,res){
    Booking.findById(req.params.id).then((bookings) => {
        if(bookings){
        res.json(bookings)
   /* Booking.findById(req.params.id).then((booking) => {
        if(booking){
            axios.get("http://localhost:3000/room/"+booking.roomID).then((response)=>{
                var bookingobject = {roomNo : response.data.roomNo, guestName:''}

                axios.get("http://localhost:3000/guest/"+booking.guestID).then((response)=>{
                    bookingobject.guestName=response.data.name
                    res.json(bookingobject)
                })
            })*/
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.post('/booking',function(req,res){
    var newBooking = {
        roomNo:  req.body.roomNo,
        name: req.body.name,
        children: req.body.children,
        adult: req.body.adult,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        days:req.body.days
    }
    var booking = new Booking(newBooking)

    booking.save().then(() => {
        console.log("New Booking Created")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})


router.delete('/booking/:id',function(req,res){
    Booking.findByIdAndRemove(req.params.id).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

module.exports = router;