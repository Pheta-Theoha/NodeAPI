module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        superID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        // freezeTableName: false
    });

    sequelize.sync().then(() => {
        console.log('User table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return User;
    
}
