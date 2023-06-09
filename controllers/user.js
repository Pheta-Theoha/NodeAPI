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
        });
        // .then(res => {
        //     console.log("Testing row insertion");
        //     console.log(res);
        //     return User;
        // }).catch((error) => {
        //     console.error("Failed to create a new record: ", error);
        // });
        
        // res.render('submit_form', { username }); 
        
        // await User.findOne({
        //     where: {
        //         id: 1,
        //     },
        // }).then((user) => {
        //     // Access the row data
        //     const id = user.id;
        //     const name = user.userID;
        //     const email = user.email;
      
        //     // Do something with the row data
        // });
        
        // const userName = await User.findOne({
        //     where: { superID: "superAdmmin4" },
        // });

        // console.log(userName.toJSON());

        
    },

    access: async (req, res) => {
        try {
            let users = await User.findAll();

            return users;
           
        } catch (error) {
            
        }
        

    }
    // access: async (req, res) => {
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
