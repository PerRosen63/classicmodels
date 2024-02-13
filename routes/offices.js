var express = require('express');
var router = express.Router();

const mysql = require('mysql2')

/* GET offices listing. */
router.get('/', function(req, res, next) {
  res.send('offices');
});

module.exports = router;
