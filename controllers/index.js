var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/details', function(req, res, next) {
  res.render('details');
});

router.get('/series', function(req, res, next) {
  res.render('series');
});

module.exports = router;
