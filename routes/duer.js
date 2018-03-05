var express = require('express');
var router = express.Router();


router.post('/checktax', function(req, res, next) {
  res.json({
    amount: '1000'
  })
});

module.exports = router;
