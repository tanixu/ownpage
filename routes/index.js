var express = require('express');
var articleDao = require('../dao/articleDao');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});
router.post('/get', function(req, res, next) {
  articleDao.query(req, res, next);
});

module.exports = router;
