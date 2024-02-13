var express = require('express');
var router = express.Router();

const mysql = require('mysql2')

/* GET productlines listing. */
router.get('/', function(req, res, next) {
  res.send('productlines');
});

module.exports = router;
