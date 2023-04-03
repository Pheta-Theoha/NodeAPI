var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

//Terms & Conditions route
router.get('/t&c', function(req, res, next) {
  res.render('t&c', { title: 'MalJusT Template' });
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


//Admin routes
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'MalJusT Template' });
});

router.get('/newPassword', function(req, res, next) {
  res.render('newPassword', { title: 'MalJusT Template' });
});

router.get('/admin/adminHome', function(req, res, next) {
  res.render('admin/adminHome', { title: 'MalJusT Template' });
});

router.get('/admin/adminServices', function(req, res, next) {
  res.render('admin/adminServices', { title: 'MalJusT Template' });
});

router.get('/admin/adminAbout', function(req, res, next) {
  res.render('admin/adminAbout', { title: 'MalJusT Template' });
});

router.get('/adminHome', function(req, res, next) {
  res.render('adminHome', { title: 'MalJusT Template' });
});

//Voting system routes
router.get('/voting/vHome', function(req, res, next) {
  res.render('voting/vHome', { title: 'MalJusT Template' });
});

router.get('/vHome', function(req, res, next) {
  res.render('/vHome', { title: 'MalJusT Template' });
});

router.get('/voting/vServices', function(req, res, next) {
  res.render('voting/vServices', { title: 'MalJusT Template' });
});

router.get('/voting/vAbout', function(req, res, next) {
  res.render('voting/vAbout', { title: 'MalJusT Template' });
});

router.get('/voting/vContact', function(req, res, next) {
  res.render('voting/vContact', { title: 'MalJusT Template' });
});
//Hospitality system routes
router.get('/hospitality/hHome', function(req, res, next) {
  res.render('hospitality/hHome', { title: 'MalJusT Template' });
});

router.get('/hospitality/hservices', function(req, res, next) {
  res.render('hospitality/hservices', { title: 'MalJusT Template' });
});

router.get('/hospitality/habout', function(req, res, next) {
  res.render('hospitality/habout', { title: 'MalJusT Template' });
});

router.get('/hospitality/hcontact', function(req, res, next) {
  res.render('hospitality/hcontact', { title: 'MalJusT Template' });
});

router.get('/hHome', function(req, res, next) {
  res.render('/hHome', { title: 'MalJusT Template' });
});

//Student registration routes
router.get('/studentReg/shome', function(req, res, next) {
  res.render('studentReg/shome', { title: 'MalJusT Template' });
});

//tourism management routes
router.get('/tourismMan/tHome', function(req, res, next) {
  res.render('tourismMan/tHome', { title: 'MalJusT Template' });
});

router.get('/tourismMan/tservices', function(req, res, next) {
  res.render('tourismMan/tservices', { title: 'MalJusT Template' });
});

router.get('/tourismMan/tabout', function(req, res, next) {
  res.render('tourismMan/tabout', { title: 'MalJusT Template' });
});

router.get('/tourismMan/tcontact', function(req, res, next) {
  res.render('tourismMan/tcontact', { title: 'MalJusT Template' });
});

router.get('/hHome', function(req, res, next) {
  res.render('/hHome', { title: 'MalJusT Template' });
});

module.exports = router;
