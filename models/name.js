'use strict';

const mongoose = require('mongoose');

// let nameSchema = new mongoose.Schema({
//   name: String,
//   address: String,
//   phoneNumber: Number
// });

// let Name = mongoose.model('Name', nameSchema);

module.exports = Name;










//user auth
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET;

// let userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true }
// });

// userSchema.statics.authMiddleware = function(req, res, next) {

//   let token = req.cookies.authtoken;

//   jwt.verify(token, JWT_SECRET, (err, payload) => {
//     if(err) return res.status(401).send(err);

//     User.findById(payload._id, (err, user) => {
//       if(err || !user) return res.status(401).send(err || {error: 'User not found.'});

//       req.user = user;

//       next();
//     }).select('-password');
//   });
// };

// userSchema.methods.generateToken = function() {
//   let payload = {
//     _id: this._id
//   }

//   let token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1 day'});
//   return token;
// };

// userSchema.statics.register = function(userObj, cb) {

//   this.findOne({username: userObj.username}, (err, user) => {
//     if(err || user) return cb(err || {error: 'Username already taken.'});

//     this.create(userObj, err => {
//       cb(err);
//     });
//   });
// };

// userSchema.statics.authenticate = function(userObj, cb) {

//   this.findOne({username: userObj.username}, (err, user) => {
//     if(err) return cb(err);

//     if(!user || user.password !== userObj.password) {
//       return cb({error: 'Invalid username or password.'});
//     }

//     let token = user.generateToken();

//     cb(null, token);
//   });
// };
