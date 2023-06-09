"use strict";

var _require = require('../app'),
    response = _require.response;

var _require2 = require('../models/hospitality_model'),
    patient = _require2.models.patient;

module.exports = {
  create: function create(req, res) {
    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Testing row insertion"); // const { username, password } = req.body;

            _context.next = 3;
            return regeneratorRuntime.awrap(patient.create({
              firstName: firstName,
              lastName: lastName,
              bloodType: bloodType,
              dateOfBirth: dateOfBirth,
              medicalCondition: medicalCondition,
              urgency: urgency,
              currentMedication: currentMedication,
              overnight: overnight,
              diabetic: diabetic
            }).then(function (res) {
              console.log("Testing row insertion");
              console.log(res);
              return patient;
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
    var patients;
    return regeneratorRuntime.async(function access$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            patients = patient.findAll();
            return _context2.abrupt("return", patients);

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