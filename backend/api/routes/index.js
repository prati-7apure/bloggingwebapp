var express = require('express');
var router = express.Router();

require('../models/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pratiksha Satapure' });
});
router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Pratiksha Satapure' });
});

module.exports = router;
