const { res } = require('../app');
const { models: { institude } } = require('../models');

module.exports = {
    create: async (req, res) => {
        console.log("Testing row insertion");
        // const { username, password } = req.body;
        
        
        await institude.create({
            superID,
            managingAdmin,
            institudeName
        }).then(res => {
            console.log("Testing row insertion");
            console.log(res);
            return institude;
        }).catch((error) => {
            console.error("Failed to create a new record: ", error);
        });
        
        // res.render('submit_form', { username }); 
        
    }
}

// module.exports = (sequelize, DataTypes) => {
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
