"use strict";

var _require = require('../app'),
    res = _require.res;

var _require2 = require('../models'),
    User = _require2.models.User;

module.exports = {
  create: function create(req, res) {
    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const { username, password } = req.body;
            console.log("Testing row insertion");
            _context.next = 3;
            return regeneratorRuntime.awrap(User.create({
              superID: superID,
              userID: userID,
              username: username,
              institution: institution,
              password: password
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  access: function access(req, res) {
    var users;
    return regeneratorRuntime.async(function access$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(User.findAll());

          case 3:
            users = _context2.sent;
            return _context2.abrupt("return", users);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  login: function login(req, res) {
    var usersAccess;
    return regeneratorRuntime.async(function login$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              where: {
                username: req.body.username
              }
            }));

          case 3:
            usersAccess = _context3.sent;
            console.log("Trying..."); // console.log(usersAccess);

            return _context3.abrupt("return", usersAccess);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  "delete": function _delete(req, res) {
    var userDel;
    return regeneratorRuntime.async(function _delete$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              where: {
                username: req.body.username
              }
            }));

          case 3:
            userDel = _context4.sent;
            _context4.next = 6;
            return regeneratorRuntime.awrap(userDel.destroy());

          case 6:
            console.log("Trying to delete...");
            return _context4.abrupt("return", userDel);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  } // delete: async (req, res) => {
  //     const userID = await User.findOne({
  //         where: {
  //             userID: req.body.userID
  //         }
  //     })
  //     return userID; 
  //     // User.findOne({
  //     //     where: {
  //     //         userID: userID,
  //     //     },
  //     // }).then (user => {
  //     //     user.destroy().then(()=> {
  //     //     res.redirect('/users');
  //     // });
  //     // });
  //     // if(req.method === 'post') {
  //     // } else {
  //     //     res.status(405).send('Method not allowed');
  //     // }
  //     // // const deleteUser = (req, res) => {
  //     // // }
  //     // return deleteUser
  // }

};