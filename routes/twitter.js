var express = require('express');
var router = express.Router();

/* GET feed listing. */
router.get('/feed', function(req, res, next) {

  

  res.send('respond with a twitter');
});

module.exports = router;
