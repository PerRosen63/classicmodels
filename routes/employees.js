var express = require('express');
var router = express.Router();

const mysql = require('mysql2')

/* GET employees listing. */
router.get('/', function(req, res, next) {
  res.send('employees');
});

module.exports = router;
