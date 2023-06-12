"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers'),
    user = _require.user,
    node = _require.node,
    institude = _require.institude,
    candidate = _require.candidate,
    patient = _require.patient,
    student = _require.student,
    tourism = _require.tourism;

var db = require("../models/index");

var e_db = require("../models/elections_model");

var h_db = require("../models/hospitality_model");

var s_db = require("../models/student_model");

var t_db = require("../models/tourism_model");

var _require2 = require('sequelize'),
    where = _require2.where;

var bcrypt = require('bcrypt'); // const popup = require('popups');


var alert = require('alert'); // const sqlite3 = require('sqlite3').verbose();


router.use('/admin/:more', function _callee(req, res, next) {
  var _req$body, _username, _password, isValid;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, _username = _req$body.username, _password = _req$body.password; // console.log("Trying to authenticate");
          // console.log(user.login(req.username));
          // next();
          // console.log(username)
          // if( username && password ){
          //   console.log(username);
          // }else {
          //   console.log("No Username")
          // }
          // next();
          // const isValid = await user.findOne({
          //     where: {
          //         username: username,
          //         // password: password
          //       },
          //     });

          _context.next = 4;
          return regeneratorRuntime.awrap(user.login(req));

        case 4:
          isValid = _context.sent;

          if (isValid && bcrypt.compareSync(_password, isValid.password)) {
            next();
          } else {
            // popup.alert({content: "Invalid credentials"});
            alert("Invalid Credentials");
            res.render('admin'); // return;
            // res.render('admin');
          }

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // router.use('/admin/', authMiddleware, (req, res, next) => {
//   console.log("Authenticating");
//   // authenticate();
//   next();
// });
// function redirect(res, page){
//   res.render(page);
// }
// // Create a middleware function for authentication
// async function authMiddleware(req, res, next) {
//   // Check if the user is authenticated
//   const approvedUser = await user.login(req);
//   if (!approvedUser) {
//     // Redirect the user to the login page if they are not authenticated
//     console.log("Redirecting");
//     res.redirect('/admin');
//   } else {
//     // Continue with the request if the user is authenticated
//     next();
//   }
// }
// // Protect the routes that require authentication with the authMiddleware function
// router.get('/admin/:', authMiddleware, (req, res) => {
//   // This route is protected and only authenticated users can access it
//   console.log("Authenticated")
// });
// async function authenticate(req, res, next) {
//   // Check if the user is authenticated
//   approvedUser = await user.login(req);
//   // console.log(checkUser);
//   if (!approvedUser) {
//     // Redirect the user to the login page if they are not authenticated
//     redirect('admin');
//   } else {
//     next();
//   }
// }

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home Page'
  });
}); //Terms & Conditions route

router.get('/t&c', function (req, res, next) {
  res.render('t&c', {
    title: 'MalJusT Template'
  });
});
router.get('/p.pdf', function (req, res, next) {
  res.render('p.pdf', {
    title: 'MalJusT Template'
  });
}); //Get about page

router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'MalJusT Template'
  });
}); //Get services page

router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'MalJusT Template'
  });
}); //Get contact page

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Reach Out'
  });
}); // router.get('/hero-bg.jpg', function(req, res, next) {
//   res.render('hero-bg.jpg', { title: 'Reach Out' });
// });
//SuperAdmin routes
// router.get('/super', function(req, res, next) {
//   res.render('super', { title: 'MalJusT Template' });
// });

router.get('/super/super', function (req, res, next) {
  res.render('super/super', {
    title: 'MalJusT Template'
  });
});
router.get('/super/superAdminHome', function (req, res, next) {
  // res.render('super/superAdminHome', { title: 'MalJusT Template' });
  console.log("Date:", date, "\nTime:", time);
  next();
}, function (req, res, next) {
  res.render('super/superAdminHome', {
    title: 'MalJusT Template'
  });
}); // router.get('superAdminHome', function(req, res, next) {
//   res.render('superAdminHome', { title: 'MalJusT Template' });
// }),

router.get('/super/users', function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // user.userID;
          next();

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}, function _callee3(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(user.access());

        case 2:
          users = _context3.sent;
          console.log(users);
          res.render('super/users', {
            title: 'MalJusT Template',
            user1: users[0].userID,
            user2: users[1].userID,
            user3: users[2].userID,
            user4: users[3].userID,
            user5: users[4].userID,
            user6: users[5].userID,
            user7: users[6].userID,
            user8: users[7].userID,
            user9: users[8].userID
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/super/nodes', function _callee4(req, res, next) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          next();

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}, function _callee5(req, res) {
  var nodes;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(node.access());

        case 2:
          nodes = _context5.sent;
          console.log(nodes);
          res.render('super/nodes', {
            title: 'MalJusT Template',
            node1: nodes[0].nodeID,
            node2: nodes[1].nodeID,
            node3: nodes[2].nodeID,
            node4: nodes[3].nodeID,
            node5: nodes[4].nodeID,
            node6: nodes[5].nodeID,
            node7: nodes[6].nodeID,
            node8: nodes[7].nodeID,
            node9: nodes[8].nodeID
          });

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.get('/super/institutions', function _callee6(req, res, next) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          next();

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
}, function _callee7(req, res) {
  var institutes;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(institude.access());

        case 2:
          institutes = _context7.sent;
          console.log(institutes);
          res.render('super/institutions', {
            title: 'MalJusT Template',
            institute1: institutes[0].institudeName,
            institute2: institutes[1].institudeName,
            institute3: institutes[2].institudeName,
            institute4: institutes[3].institudeName,
            institute5: institutes[4].institudeName,
            institute6: institutes[5].institudeName,
            institute7: institutes[6].institudeName,
            institute8: institutes[7].institudeName // institute9: institutes[8].institudeName,

          });

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.get('/super/logs&docs', function (req, res, next) {
  res.render('super/logs&docs', {
    time: time
  });
});
router.get('/super/addUser', function (req, res, next) {
  res.render('super/addUser', {
    title: 'MalJusT Template'
  });
});
router.get('/super/removeUser', function (req, res, next) {
  res.render('super/removeUser', {
    title: 'MalJusT Template'
  });
});
router.get('/super/addNode', function (req, res, next) {
  res.render('super/addNode', {
    title: 'MalJusT Template'
  });
});
router.get('/super/removeNode', function (req, res, next) {
  res.render('super/removeNode', {
    title: 'MalJusT Template'
  });
});
router.get('/super/addInstitude', function (req, res, next) {
  res.render('super/addInstitude', {
    title: 'MalJusT Template'
  });
});
router.get('/super/removeInstitute', function (req, res, next) {
  res.render('super/removeInstitute', {
    title: 'MalJusT Template'
  });
});
router.get('/super/profile', function (req, res, next) {
  res.render('super/profile', {
    title: 'MalJusT Template'
  });
});
router.get('/super/submit_form', function (req, res, next) {
  res.render('super/submit_form', {
    title: 'MalJusT Template'
  });
});
router.get('/super/submit_node', function (req, res, next) {
  res.render('super/submit_node', {
    title: 'MalJusT Template'
  });
});
router.get('/super/submit_institude', function (req, res, next) {
  res.render('super/submit_institude', {
    title: 'MalJusT Template'
  });
});
router.post('/super/testing', function (req, res, next) {
  res.render('super/testing', {
    title: 'MalJusT Template'
  });
}); // router.post('/super/submit_form')

router.post('/super/submit_form', function (req, res, next) {
  superID = req.body.superAdminID;
  userID = req.body.adminID;
  username = req.body.username;
  password = req.body.password;
  institution = req.body.institution;
  user.create();
  next(); // res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
  // res.send(`Authorized by ${req.body.superAdminID}, Your admin id is ${req.body.adminID} and your username is ${req.body.username} and your password is ${req.body.password}!`);
}, function (req, res) {
  console.log(user);
  res.render('super/submit_form', {
    username: req.body.username,
    userID: req.body.adminID,
    superID: req.body.superAdminID
  });
});
router.post('/super/submit_node', function (req, res, next) {
  superID = req.body.superAdminID;
  nodeID = req.body.nodeID;
  owner = req.body.owner;
  node.create();
  next(); // res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
  // res.send(`Authorized by ${req.body.superAdminID}, Your admin id is ${req.body.adminID} and your username is ${req.body.username} and your password is ${req.body.password}!`);
}, function (req, res) {
  console.log(node);
  res.render('super/submit_node', {
    owner: req.body.owner,
    nodeID: req.body.nodeID,
    superID: req.body.superAdminID
  });
});
router.post('/super/submit_institude', function (req, res, next) {
  superID = req.body.superAdminID;
  institudeName = req.body.institudeName;
  managingAdmin = req.body.managingAdmin;
  institude.create();
  next(); // res.render('super/submit_form', { username: req.body.username, userID: req.body.adminID, superID: req.body.superAdminID })
  // res.send(`Authorized by ${req.body.superAdminID}, Your admin id is ${req.body.adminID} and your username is ${req.body.username} and your password is ${req.body.password}!`);
}, function (req, res) {
  console.log(institude);
  console.log("Institude added successfully");
  res.render('super/submit_institude', {
    managingAdmin: req.body.managingAdmin,
    institudeName: req.body.institudeName,
    superID: req.body.superAdminID
  });
}); // router.get('/super/profile:');
// router.post('/super/profile', user.create);
//Admin routes

router.get('/admin', function (req, res, next) {
  res.render('admin', {
    title: 'MalJusT Template'
  });
});
router.get('/newPassword', function (req, res, next) {
  res.render('newPassword', {
    title: 'MalJusT Template'
  });
});
router.get('/admin/adminHome', function (req, res, next) {
  res.render('admin/adminHome', {
    title: 'MalJusT Template'
  });
});
router.post('/admin/adminHome', function (req, res, next) {
  console.log(req.body.username); // user.login();

  next();
}, function (req, res) {
  // console.log("Access Granted");
  res.render('admin/adminHome', {
    title: 'MalJusT Template'
  }); // if(user){
  // }else{
  // console.log("Denied");
  // res.render('admin', { title: 'MalJusT Template' });
  // }
});
router.get('/admin/adminServices', function (req, res, next) {
  res.render('admin/adminServices', {
    title: 'MalJusT Template'
  });
});
router.get('/admin/adminAbout', function (req, res, next) {
  res.render('admin/adminAbout', {
    title: 'MalJusT Template'
  });
});
router.get('/adminHome', function (req, res, next) {
  res.render('adminHome', {
    title: 'MalJusT Template'
  });
}); //Voting system routes

router.get('/voting/vHome', function (req, res, next) {
  res.render('voting/vHome', {
    title: 'MalJusT Template'
  });
});
router.get('/voting/vSubmit', function (req, res, next) {
  res.render('voting/vSubmit', {
    title: 'MalJusT Template'
  });
});
router.post('/voting/vSubmit', function (req, res, next) {
  fName = req.body.fName;
  lName = req.body.lName;
  department = req.body.department;
  previousPos = req.body.previousPos;
  numOfYears = req.body.numOfYears;
  title = req.body.title;
  statement = req.body.statement;
  candidate.create();
  next();
}, function (req, res) {
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
router.get('/vHome', function (req, res, next) {
  res.render('/vHome', {
    title: 'MalJusT Template'
  });
});
router.get('/voting/vServices', function _callee8(req, res, next) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(candidate.access());

        case 2:
          candidates = _context8.sent;
          next();

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
}, function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          res.render('voting/vServices', {
            title: 'MalJusT Template',
            candidate1: candidates[0].lName,
            lCandidate1: candidates[0].fName,
            candidate2: candidates[1].lName,
            lCandidate2: candidates[1].fName,
            candidate3: candidates[2].lName,
            lCandidate3: candidates[2].fName // candidate4: candidates[3].lName,
            // candidate5: candidates[4].lName,
            // candidate6: candidates[5].lName,
            // candidate7: candidates[6].lName,
            // candidate8: candidates[7].lName,
            // candidate9: candidates[8].lName,

          });

        case 1:
        case "end":
          return _context9.stop();
      }
    }
  });
});
router.get('/voting/vAbout', function (req, res, next) {
  res.render('voting/vAbout', {
    title: 'MalJusT Template'
  });
});
router.get('/voting/vContact', function (req, res, next) {
  res.render('voting/vContact', {
    title: 'MalJusT Template'
  });
}); //Hospitality system routes

router.get('/hospitality/hHome', function (req, res, next) {
  res.render('hospitality/hHome', {
    title: 'MalJusT Template'
  });
});
router.get('/hospitality/hLogin', function (req, res, next) {
  res.render('hospitality/hLogin', {
    title: 'MalJusT Template'
  });
});
router.get('/hospitality/patients', function _callee10(req, res, next) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(patient.access());

        case 2:
          patients = _context10.sent;
          next();

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
}, function (req, res) {
  res.render('hospitality/patients', {
    title: 'MalJusT Template',
    patient1: patients[0].lastName,
    patient2: patients[1].lastName // patient3: patients[2].lastName,
    // patient4: patients[3].lastName,
    // patient5: patients[4].lastName,
    // patient6: patients[5].lastName,
    // patient7: patients[6].lastName,
    // patient8: patients[7].lastName,
    // patient9: patients[8].lastName,

  });
});
router.get('/hospitality/hSubmit', function (req, res, next) {
  res.render('hospitality/hSubmit', {
    title: 'MalJusT Template'
  });
});
router.post('/hospitality/hSubmit', function (req, res, next) {
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  bloodType = req.body.bloodType;
  dateOfBirth = req.body.dateOfBirth;
  medicalCondition = req.body.medicalCondition;
  urgency = req.body.urgency;
  currentMedication = req.body.currentMedication;
  overnight = req.body.overnight;
  diabetic = req.body.diabetic; // if(!req.body.diabetic == null){
  //   diabetic = "True";
  // }else {
  //   diabetic = "False";
  // }

  patient.create();
  next();
}, function (req, res) {
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
router.get('/hospitality/hservices', function (req, res, next) {
  res.render('hospitality/hservices', {
    title: 'MalJusT Template'
  });
});
router.get('/hospitality/habout', function (req, res, next) {
  res.render('hospitality/habout', {
    title: 'MalJusT Template'
  });
});
router.get('/hospitality/hcontact', function (req, res, next) {
  res.render('hospitality/hcontact', {
    title: 'MalJusT Template'
  });
});
router.get('/hospitality/discharge', function (req, res, next) {
  res.render('hospitality/discharge', {
    title: 'MalJusT Template'
  });
});
router.get('/hHome', function (req, res, next) {
  res.render('/hHome', {
    title: 'MalJusT Template'
  });
}); //Student registration routes

router.get('/studentReg/shome', function (req, res, next) {
  res.render('studentReg/shome', {
    title: 'MalJusT Template'
  });
});
router.get('/studentReg/sSubmit', function (req, res, next) {
  res.render('studentReg/sSubmit', {
    title: 'MalJusT Template'
  });
});
router.post('/studentReg/sSubmit', function (req, res, next) {
  sfirstName = req.body.sfirstName;
  slastName = req.body.slastName;
  studentNum = req.body.studentNum;
  enrolmentDate = req.body.enrolmentDate;
  programme = req.body.programme;
  yearOfStudy = req.body.yearOfStudy;
  numOfModules = req.body.numOfModules;
  modulesToBeRepeated = req.body.modulesToBeRepeated;
  fullTime = req.body.fullTime; // console.log(fullTime)

  student.create();
  next();
}, function (req, res) {
  console.log(student);
  console.log("Student added successfully!");
  res.render('studentReg/sSubmit', {
    sfirstName: req.body.sfirstName,
    slastName: req.body.slastName,
    studentNum: req.body.studentNum,
    enrolmentDate: req.body.enrolmentDate,
    programme: req.body.programme,
    yearOfStudy: req.body.yearOfStudy,
    numOfModules: req.body.numOfModules,
    modulesToBeRepeated: req.body.modulesToBeRepeated,
    fullTime: req.body.fullTime
  });
});
router.get('/studentReg/sabout', function (req, res, next) {
  res.render('studentReg/sabout', {
    title: 'MalJusT Template'
  });
});
router.get('/studentReg/sLogin', function (req, res, next) {
  res.render('studentReg/sLogin', {
    title: 'MalJusT Template'
  });
});
router.get('/studentReg/students', function _callee11(req, res, next) {
  var access;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(user.access());

        case 2:
          access = _context11.sent;
          next();

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
}, function _callee12(req, res) {
  var students;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(student.access());

        case 2:
          students = _context12.sent;
          res.render('studentReg/students', {
            title: 'MalJusT Template',
            student1: students[0].slastName,
            student2: students[1].slastName,
            student3: students[2].slastName // student4: students[3].slastName,
            // student5: students[4].slastName,
            // student6: students[5].slastName,
            // student7: students[6].slastName,
            // student8: students[7].slastName,
            // student9: students[8].slastName,

          });

        case 4:
        case "end":
          return _context12.stop();
      }
    }
  });
});
router.get('/studentReg/sservices', function (req, res, next) {
  res.render('studentReg/sservices', {
    title: 'MalJusT Template'
  });
});
router.get('/studentReg/scontact', function (req, res, next) {
  res.render('studentReg/scontact', {
    title: 'MalJusT Template'
  });
});
router.get('/studentReg/removeStudent', function (req, res, next) {
  res.render('studentReg/removeStudent', {
    title: 'MalJusT Template'
  });
}); //tourism management routes

router.get('/tourismMan/tHome', function (req, res, next) {
  res.render('tourismMan/tHome', {
    title: 'MalJusT Template'
  });
});
router.get('/tourismMan/tLogin', function (req, res, next) {
  res.render('tourismMan/tLogin', {
    title: 'MalJusT Template'
  });
});
router.get('/tourismMan/tourists', function _callee13(req, res, next) {
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          next();

        case 1:
        case "end":
          return _context13.stop();
      }
    }
  });
}, function _callee14(req, res) {
  var tourists;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(tourism.access());

        case 2:
          tourists = _context14.sent;
          res.render('tourismMan/tourists', {
            title: 'MalJusT Template',
            tname1: tourists[0].tLastName // tname2: tourists[1].tLastName,
            // tname3: tourists[2].tLastName,
            // tname4: tourists[3].tLastName,
            // tname5: tourists[4].tLastName,
            // tname6: tourists[5].tLastName,
            // tname7: tourists[6].tLastName,
            // tname8: tourists[7].tLastName,
            // tname9: tourists[8].tLastName,

          });

        case 4:
        case "end":
          return _context14.stop();
      }
    }
  });
});
router.get('/tourismMan/tSubmit', function (req, res, next) {
  res.render('tourismMan/tSubmit', {
    title: 'MalJusT Template'
  });
});
router.post('/tourismMan/tSubmit', function (req, res, next) {
  tFirstName = req.body.tFirstName;
  tLastName = req.body.tLastName;
  nationality = req.body.nationality;
  arrival = req.body.arrival;
  departure = req.body.departure;
  stay = req.body.stay;
  places = req.body.places;
  interest = req.body.interest;
  international = req.body.international;
  tourism.create();
  next();
}, function (req, res) {
  console.log(tourism);
  console.log("Tourist added successfully");
  res.render('tourismMan/tSubmit', {
    tFirstName: req.body.tFirstName,
    tLastName: req.body.tLastName,
    nationality: req.body.nationality,
    arrival: req.body.arrival,
    departure: req.body.departure,
    stay: req.body.stay,
    places: req.body.places,
    interest: req.body.interest,
    international: req.body.international
  });
});
router.get('/tourismMan/tservices', function (req, res, next) {
  res.render('tourismMan/tservices', {
    title: 'MalJusT Template'
  });
});
router.get('/tourismMan/tabout', function (req, res, next) {
  res.render('tourismMan/tabout', {
    title: 'MalJusT Template'
  });
});
router.get('/tourismMan/tcontact', function (req, res, next) {
  res.render('tourismMan/tcontact', {
    title: 'MalJusT Template'
  });
});
router.get('/tourismMan/removeTourist', function (req, res, next) {
  res.render('tourismMan/removeTourist', {
    title: 'MalJusT Template'
  });
});
module.exports = router;