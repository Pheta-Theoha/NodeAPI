var express = require('express');
var router = express.Router();
// var connection = require('../config/db-config')

/* GET users listing. */
router.get('/super/user', function(req, res, next) {
  // res.send('respond with a resource');
  var user = "SELECT 'username' FROM 'user'";

  // connection.query()
});

module.exports = router;
