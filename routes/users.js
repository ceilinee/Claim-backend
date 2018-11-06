var express = require('express');
var router = express.Router();
var Send = require('../models/Send');
var Retrieve = require('../models/Retrieve');
const fs = require('fs');
const imgurUploader = require('imgur-uploader');
/* GET users listing. */
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
router.post('/image/', function(req, res, next) {
  imgurUploader(fs.readFileSync(req.body), {title: 'Hello!'}).then(data => {
    console.log(data);
  });
});
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
