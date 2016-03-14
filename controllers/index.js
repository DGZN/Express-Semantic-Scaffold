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

router.get('/season', function(req, res, next) {
  res.render('season');
});

router.get('/music', function(req, res, next) {
  res.render('music');
});

router.get('/album', function(req, res, next) {
  res.render('albums');
});

router.get('/plays', function(req, res, next) {
  res.render('plays');
});

router.get('/live', function(req, res, next) {
  res.render('live');
});

router.get('/details', function(req, res, next) {
  res.render('details');
});

module.exports = router;
