const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        superID: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        institution: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            bcrypt: true,
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

    User.beforeSave((user) => {
        user.password = bcrypt.hashSync(user.password, 10);
    });

    return User;
    
}
