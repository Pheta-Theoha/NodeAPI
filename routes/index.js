var express = require('express');
var router = express.Router();
const { user, node, institude, candidate, patient } = require('../controllers')
const db = require("../models/index");
const e_db = require("../models/elections_model");
const h_db = require("../models/hospitality_model");
// const sqlite3 = require('sqlite3').verbose();


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

//Terms & Conditions route
router.get('/t&c', function(req, res, next) {
  res.render('t&c', { title: 'MalJusT Template' });
});

router.get('/p.pdf', function(req, res, next) {
  res.render('p.pdf', { title: 'MalJusT Template' });
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

// router.get('/hero-bg.jpg', function(req, res, next) {
//   res.render('hero-bg.jpg', { title: 'Reach Out' });
// });

//SuperAdmin routes
// router.get('/super', function(req, res, next) {
//   res.render('super', { title: 'MalJusT Template' });
// });

router.get('/super/super', function(req, res, next) {
  res.render('super/super', { title: 'MalJusT Template' });
});

router.get('/super/superAdminHome', function(req, res, next) {
  // res.render('super/superAdminHome', { title: 'MalJusT Template' });
  console.log("Date:", date, "\nTime:", time);
  next();
}, function(req, res, next){
  res.render('super/superAdminHome', { title: 'MalJusT Template' });
});

router.get('superAdminHome', function(req, res, next) {
  res.render('superAdminHome', { title: 'MalJusT Template' });
}),

router.get('/super/users', function(req, res, next) {
  res.render('super/users', { title: 'MalJusT Template' });
});

router.get('/super/nodes', function(req, res, next) {
  res.render('super/nodes', { title: 'MalJusT Template' });
}); 

router.get('/super/institutions', function(req, res, next) {
  res.render('super/institutions', { title: 'MalJusT Template' });
});

router.get('/super/logs&docs', function(req, res, next) {
  res.render('super/logs&docs', { time: time });
});

router.get('/super/addUser', function(req, res, next) {
  res.render('super/addUser', { title: 'MalJusT Template' });
});

router.get('/super/addNode', function(req, res, next) {
  res.render('super/addNode', { title: 'MalJusT Template' });
});

router.get('/super/addInstitude', function(req, res, next) {
  res.render('super/addInstitude', { title: 'MalJusT Template' });
});

router.get('/super/profile', function(req, res, next) {
  res.render('super/profile', { title: 'MalJusT Template' });
});

router.get('/super/submit_form', function(req, res, next) {
  res.render('super/submit_form', { title: 'MalJusT Template' });
});

router.get('/super/submit_node', function(req, res, next) {
  res.render('super/submit_node', { title: 'MalJusT Template' });
});

router.get('/super/submit_institude', function(req, res, next) {
  res.render('super/submit_institude', { title: 'MalJusT Template' });
});

router.post('/super/testing', function(req, res, next) {
  res.render('super/testing', { title: 'MalJusT Template' });
});

// router.post('/super/submit_form')

router.post('/super/submit_form', function(req, res, next) {
  superID = req.body.superAdminID;
  userID = req.body.adminID;
  username = req.body.username;
  password = req.body.password;
  institution = req.body.institution;
  user.create();
  next();
  // res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
  // res.send(`Authorized by ${req.body.superAdminID}, Your admin id is ${req.body.adminID} and your username is ${req.body.username} and your password is ${req.body.password}!`);
}, (req, res) => {
  console.log(user);
  res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
});

router.post('/super/submit_node', function(req, res, next) {
  superID = req.body.superAdminID;
  nodeID = req.body.nodeID;
  owner = req.body.owner;
  node.create();
  next();
  // res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
  // res.send(`Authorized by ${req.body.superAdminID}, Your admin id is ${req.body.adminID} and your username is ${req.body.username} and your password is ${req.body.password}!`);
}, (req, res) => {
  console.log(node);
  res.render('super/submit_node', { owner: req.body.owner, nodeID: req.body.nodeID, superID: req.body.superAdminID })
});

router.post('/super/submit_institude', function(req, res, next) {
  superID = req.body.superAdminID;
  institudeName = req.body.institudeName;
  managingAdmin = req.body.managingAdmin;
  institude.create();
  next();
  // res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
  // res.send(`Authorized by ${req.body.superAdminID}, Your admin id is ${req.body.adminID} and your username is ${req.body.username} and your password is ${req.body.password}!`);
}, (req, res) => {
  console.log(institude);
  console.log("Institude added successfully");
  res.render('super/submit_institude', { managingAdmin: req.body.managingAdmin, institudeName: req.body.institudeName, superID: req.body.superAdminID })
});


 // router.get('/super/profile:');

// router.post('/super/profile', user.create);

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


// router.post('/admin/adminHome', function(req, res, next) {
//   user.login();
//   next();
// }, (req, res) => {
//   if(user){
//     console.log("Access Granted");
//     res.render('admin/adminHome', { title: 'MalJusT Template' });
//   }else{
//     console.log("Denied");
//     res.render('admin', { title: 'MalJusT Template' });
//   }
// });

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

router.get('/voting/vSubmit', function(req, res, next) {
  res.render('voting/vSubmit', { title: 'MalJusT Template' });
});

router.post('/voting/vSubmit', function(req, res, next) {
  fName = req.body.fName;
  lName = req.body.lName;
  department = req.body.department;
  previousPos = req.body.previousPos;
  numOfYears = req.body.numOfYears;
  title = req.body.title;
  statement = req.body.statement;
  candidate.create();
  next();
}, (req, res) => {
  console.log(candidate);
  console.log("Candidate added successfully");
  res.render('voting/vSubmit', { 
    First_Name: req.body.fName, 
    Last_Name: req.body.lName, 
    department: req.body.department, 
    previousPos: req.body.previousPos,
    Number_of_Years: req.body.numOfYears,
    title: req.body.title,
    statement: req.body.statement
   });
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

router.get('/hospitality/hSubmit', function(req, res, next) {
  res.render('hospitality/hSubmit', { title: 'MalJusT Template' });
});

router.post('/hospitality/hSubmit', function(req, res, next) {
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  bloodType = req.body.bloodType;
  dateOfBirth = req.body.dateOfBirth;
  medicalCondition = req.body.medicalCondition;
  urgency = req.body.urgency;
  currentMedication = req.body.currentMedication;
  overnight = req.body.overnight;
  diabetic = req.body.diabetic;
  patient.create();
  next();
}, (req, res) => {
  console.log(patient);
  console.log("Patient added successfully!");
  res.render('hospitality/hSubmit', { 
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    bloodType: req.body.bloodType,
    dateOfBirth: req.body.dateOfBirth,
    medicalCondition: req.body.medicalCondition,
    urgency: req.body.urgency,
    currentMedication: req.body.currentMedication,
    overnight: req.body.overnight,
    diabetic: req.body.diabetic
  });
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

router.get('/studentReg/sabout', function(req, res, next) {
  res.render('studentReg/sabout', { title: 'MalJusT Template' });
});

router.get('/studentReg/sservices', function(req, res, next) {
  res.render('studentReg/sservices', { title: 'MalJusT Template' });
});

router.get('/studentReg/scontact', function(req, res, next) {
  res.render('studentReg/scontact', { title: 'MalJusT Template' });
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

module.exports = router;
