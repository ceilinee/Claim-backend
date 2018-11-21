var express = require('express');
var router = express.Router();
var Send = require('../models/Send');
var Retrieve = require('../models/Retrieve');
const fs = require('fs');
const imgurUploader = require('imgur-uploader');
/* GET all Claims. */
/* calls getAllClaims (found in models -> Retrieve.js)*/
router.get('/', function(req, res, next) {
  Retrieve.getAllClaims(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
/* GET all Chat. */
/* calls getAllChat (found in models -> Retrieve.js)*/
router.get('/chat', function(req, res, next) {
  Retrieve.getAllChat(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
/* GET Image, currently unused. */
/* calls getImage (found in models -> Retrieve.js)*/
router.get('/image', function(req, res, next) {
  Retrieve.getImage(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
/* Post new Claim, currently unused. */
/* calls addClaim (found in models -> Send.js)*/
router.post('/claim/', function(req, res, next) {
  Send.addClaim(req.body, function(err, rows){
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
/* Delete Claim, currently unused. */
/* calls deleteClaim (found in models -> Send.js)*/
router.delete('/deleteClaim/', function(req, res, next) {
  Send.deleteClaim(req.query, function(err, rows){
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
/* Post chatlog, currently unused. */
/* calls addChat (found in models -> Send.js)*/
router.post('/submitchat', function(req, res, next) {
  console.log(req.body);
  Send.addChat(req.body, function(err, rows){
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

module.exports = router;
