module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        superID: DataTypes.STRING,
        userID: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, 
    {
        freezeTableName: true
    });

    return User;
    
}