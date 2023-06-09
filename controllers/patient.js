const { response } = require('../app');
const { models: { patient } } = require('../models/hospitality_model');

module.exports = {
    create: async (req, res) => {
        console.log("Testing row insertion");
        // const { username, password } = req.body;
        
        
        await patient.create({
            firstName,
            lastName,
            bloodType,
            dateOfBirth,
            medicalCondition,
            urgency,
            currentMedication,
            overnight,
            diabetic
        }).then(res => {
            console.log("Testing row insertion");
            console.log(res);
            return patient;
        }).catch((error) => {
            console.error("Failed to create a new record: ", error);
        });
        
        // res.render('submit_form', { username }); 
        
    },
    access: async(req, res) => {
        try {
            let patients = patient.findAll();
            return patients;
        } catch (error){
            
        }
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
