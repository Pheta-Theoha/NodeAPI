module.exports = (sequelize, DataTypes) => {
    const tourism = sequelize.define('tourism', {
        tFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        arrival: {
            type: DataTypes.DATE,
            allowNull: false
        },
        departure: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        places: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interest: {
            type: DataTypes.STRING,
            allowNull: true
        },
        international: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    
    {
        // freezeTableName: false
    });

    sequelize.sync().then(() => {
        console.log('Tourism table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return tourism;
    
}
