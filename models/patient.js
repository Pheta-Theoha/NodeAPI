module.exports = (sequelize, DataTypes) => {
    const patient = sequelize.define('patient', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bloodType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false
        },
        medicalCondition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        urgency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        currentMedication: {
            type: DataTypes.STRING,
            allowNull: false
        },
        overnight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        diabetic: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    
    {
        // freezeTableName: false
    });

    sequelize.sync().then(() => {
        console.log('Patient table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return patient;
    
}
