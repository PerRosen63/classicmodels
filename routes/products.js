var express = require('express');
var router = express.Router();

const mysql = require('mysql2')

/* GET products listing. */
router.get('/', function(req, res, next) {
  //res.send('products');
  

  let sql = `SELECT productName, productLine FROM products`;

  req.app.locals.con.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log('result', result);
    res.send(result); //Skriv ut
  })
});

module.exports = router;
