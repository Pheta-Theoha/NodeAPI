"use strict";

var _require = require('../app'),
    res = _require.res;

var _require2 = require('../models/elections_model'),
    votes = _require2.models.votes;

module.exports = {
  create: function create(req, res) {
    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Testing row insertion"); // const { username, password } = req.body;

            _context.next = 3;
            return regeneratorRuntime.awrap(votes.create({
              vLastName: vLastName,
              cLastName: cLastName,
              cPosition: cPosition
            }).then(function (res) {
              console.log("Testing row insertion");
              console.log(res);
              return votes;
            })["catch"](function (error) {
              console.error("Failed to create a new record: ", error);
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  access: function access(req, res) {
    var _votes;

    return regeneratorRuntime.async(function access$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _votes = _votes.findAll();
            return _context2.abrupt("return", _votes);

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 5]]);
  }
}; // module.exports = (sequelize, DataTypes) => {
//     const user = sequelize.define('user', {
//         superID: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         userID: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//     }, 
//     {
//         freezeTableName: true
//     });
//     sequelize.sync().then(() => {
//         console.log('adminUser table created successfully!');
//         user.create({
//                 superID: "superAdmin3",
//                 userID: "adminID3",
//                 username: "admin3",
//                 password: "User@2023"
//             }).then(res => {
//                 console.log(res);
//             }).catch((error) => {
//                 console.error("Failed to create a new record: ", error);
//             });
//     }).catch((error) => {
//         console.error('Unable to create table : ', error);
//     });
//     return user;
// }