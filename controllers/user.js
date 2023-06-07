const { res } = require('../app');
const { models: { User } } = require('../models');

module.exports = {
    create: async (req, res) => {
        // const { username, password } = req.body;
        console.log("Testing row insertion");
        
        
        await User.create({
            superID,
            userID,
            username,
            institution,
            password
        })
        // .then(res => {
        //     console.log("Testing row insertion");
        //     console.log(res);
        //     return User;
        // }).catch((error) => {
        //     console.error("Failed to create a new record: ", error);
        // });
        
        // res.render('submit_form', { username }); 
        
    },

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
