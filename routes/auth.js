var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var axios = require("axios");
var User = require('../models/User');
const { response } = require("express");

var app = express();
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'hotel', {
    expiresIn: maxAge
  });
};

router.get('/signup',function(req,res){
    
})

router.post('/signup',async function(req,res){
    const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
    //console.log(document.cookie);
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
  /*var newUser = {
    username: req.body.username,
    password: req.body.password,
}
var user = new User(newUser)

user.save().then(() => {
    console.log("New User Created")
}).catch((err) => {
    if(err){
        throw err;
    }
})
res.send("Success")
    */
})

router.get('/login',function(req,res){
    
})

router.post('/login', async function(req,res){
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({});
  }
})

module.exports = router;