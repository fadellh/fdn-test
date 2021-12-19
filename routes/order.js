var express = require('express');
var router = express.Router();

/* GET order listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a order list');
});

module.exports = router;