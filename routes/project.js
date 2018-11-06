var express = require('express');
var router = express.Router();
var Send = require('../models/Send');
var Retrieve = require('../models/Retrieve');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  Retrieve.getProjects(req.params.id, function (err, rows) {
    console.log(req.params.id);
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
router.put('/true/', function(req, res, next) {
  console.log(req.body.name);
  Send.changeCheck(req.body, function (err, rows){
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  })
});

module.exports = router;
