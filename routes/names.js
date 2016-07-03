'use strict';

const express = require('express');
// let Name = require('../models/name');

let router = express.Router();

//   names.js
//   /api/names

// router.route('/')
// .get((req, res) => {
//   Name.find({}, (err, names) => {
//     res.status(err ? 400 : 200).send(err || names);
//   });
// })
// .post((req, res) => {
//   Name.create(req.body, (err, name) => {
//     res.status(err ? 400 : 200).send(err || name);
//   });
// })

// router.route('/:id')
// .get((req, res) => {
//   Name.findById(req.params.id, (err, name) => {
//     res.status(err ? 400 : 200).send(err || name);      
//   });
// })
// .put((req, res) => {
//   Name.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, name) => {
//     res.status(err ? 400 : 200).send(err || name);      
//   });
// })
// .delete((req, res) => {
//   Name.findByIdAndRemove(req.params.id, err => {
//     res.status(err ? 400 : 200).send(err);      
//   });
// })

// router.put('/:id/addYear', (req, res) => {
//   Name.findById(req.params.id, (err, name) => {
//     if(err || !name) {
//       return res.status(400).send(err || {error: 'Name not found.'});
//     }
//   });

module.exports = router;

// router.route('/')
//   .get((req, res) => {

//     Name.find({})
//     .select('-name')
//     .populate('name')
//     .sort('createdAt')
//     .limit(1)
//     .exec((err, names) => {
//       res.status(err ? 400 : 200).send(err ||namess);
//     })
//   })

// router.put('/:propertyId/addResident/:residentId', (req, res) => {
//   Property.findById(req.params.propertyId, (err,property) => {
//     if(err || !property) return res.status(400).send(err || {error: 'Property not found'});

//     // '577420498a444ff041815e89'
//     property.resident = req.params.residentId;
//     property.save((err, savedProperty) => {
//       res.status(err ? 400 : 200).send(err || savedProperty);
//     });
//   });


// propertySchema.statics.totalRent = function(cb) {
//   this.find({}, (err, properties) => {
//     if(err) return cb(err);

//     let totalRent = properties.reduce((sum, prop) => sum + prop.totalRent(), 0);

//     cb(null, totalRent);
//   });
// };

// propertySchema.methods.totalRent = function() {

//   let numTenants = this.tenants.length;
//   let totalRent = numTenants * this.rent;

//   return totalRent;
// };