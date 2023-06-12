const { database } = require("firebase-admin");

module.exports = (sequelize, DataTypes) => {
    const candidate = sequelize.define('candidate', {
        fName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        previousPos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numOfYears: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statement: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    
    {
        // freezeTableName: false
    });

    // const votes = sequelize.define('votes' {
    //     voterID: {
    //         type: dataTypes.STRING,
    //         allowNull: false,
    //     },
    //     candidateNumber: {
    //         type: database.STRING,
    //         allowNull: false
    //     },
    //     position: {
    //         type: database.STRING,
    //         allowNull: false
    //     }
    // })

    sequelize.sync().then(() => {
        console.log('Candidate table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return candidate;
    
}
