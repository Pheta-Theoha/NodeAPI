"use strict";

var _require = require('../app'),
    res = _require.res;

var _require2 = require('../models'),
    Node = _require2.models.Node;

module.exports = {
  create: function create(req, res) {
    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Testing row insertion"); // const { username, password } = req.body;

            _context.next = 3;
            return regeneratorRuntime.awrap(Node.create({
              superID: superID,
              nodeID: nodeID,
              owner: owner
            }).then(function (res) {
              console.log("Testing row insertion");
              console.log(res);
              return Node;
            })["catch"](function (error) {
              console.error("Failed to create a new record: ", error);
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
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