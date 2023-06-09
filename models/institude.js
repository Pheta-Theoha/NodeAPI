module.exports = (sequelize, DataTypes) => {
    const institude = sequelize.define('institude', {
        superID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        institudeName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            defaultValue: "Vacant"
        },
        managingAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        // freezeTableName: false
    });

    sequelize.sync().then(() => {
        console.log('Institude table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return institude;
    
}
