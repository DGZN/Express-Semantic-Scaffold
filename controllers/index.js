var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/movies', function(req, res, next) {
  res.render('movies');
});

router.get('/movies/:id', function(req, res, next) {
  res.render('movie', {
    data: {
      id: req.params.id
    }
  });
});

router.get('/series', function(req, res, next) {
  res.render('series');
});

router.get('/series/:id', function(req, res, next) {
  res.render('season', {
    data: {
      id: req.params.id
    }
  });
});

router.get('/season', function(req, res, next) {
  res.render('season');
});

router.get('/music', function(req, res, next) {
  res.render('music');
});

router.get('/albums/:id', function(req, res, next) {
  res.render('album', {
    data: {
      id: req.params.id
    }
  });
});

router.get('/plays', function(req, res, next) {
  res.render('plays');
});

router.get('/plays/:id', function(req, res, next) {
  res.render('play', {
    data: {
      id: req.params.id
    }
  });
});

router.get('/live', function(req, res, next) {
  res.render('live');
});

router.get('/details', function(req, res, next) {
  res.render('details');
});

module.exports = router;
