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

module.exports = router;


