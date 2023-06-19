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
    },

    access: async (req, res) => {
        try {
            let users = await User.findAll();

            return users;
           
        } catch (error) {
            
        }
        

    },

    login: async (req, res) => {
        try {
            let usersAccess = await User.findOne({
                where: {
                    username: req.body.username,
                },
            });
            console.log("Trying...");
            // console.log(usersAccess);
            return usersAccess;
        }
        catch (error){
            console.log(error);
        }
    },
    delete: async (req, res) => {
        User.destroy(User);
    }
    // delete: async (req, res) => {
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
}
