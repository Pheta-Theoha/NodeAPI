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
  } // access: async (req, res) => {
  //     let display;
  //     await User.findOne({ where: { id: 1 } })
  //     .then(user => {
  //         if (user) {
  //             // console.log(user.toJSON());
  //             // console.log(user.userID);
  //             // const result = user.userID;
  //             // console.log(user.userID);
  //             display = user.userID;
  //             // return user.userID;
  //         } else {
  //             console.log('User not found.');
  //         }
  //     })
  //     .catch(error => {
  //         console.error('Error:', error);
  //     });
  //     return display;
  // }
  // login: async(req, res) => {
  //     if(req.body.username && req.body.password){
  //         const { username, password } = req.body;
  //         let user = await user.findOne({
  //             where: {username, password}
  //         });
  //         if(user) {
  //             // access = true;
  //             console.log("User Found");
  //             response.render('admin/adminHome', {username});
  //         }else {
  //             response.render("admin");
  //         }
  //     }
  // }

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