var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

//Get about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'MalJusT Template' });
});

//Get services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'MalJusT Template' });
});

//Get contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Reach Out' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'MalJusT Template' });
});

router.get('/newPassword', function(req, res, next) {
  res.render('newPassword', { title: 'MalJusT Template' });
});

router.get('/adminHome', function(req, res, next) {
  res.render('admin/adminHome', { title: 'MalJusT Template' });
});


module.exports = router;
