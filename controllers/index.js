var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/movies', function(req, res, next) {
  res.render('movies');
});

router.get('/series', function(req, res, next) {
  res.render('series');
});

router.get('/music', function(req, res, next) {
  res.render('music');
});

router.get('/live', function(req, res, next) {
  res.render('live');
});

router.get('/details', function(req, res, next) {
  res.render('details');
});

module.exports = router;
