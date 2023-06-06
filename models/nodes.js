module.exports = (sequelize, DataTypes) => {
    const Nodes = sequelize.define('nodes', {
        superID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nodeID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        // freezeTableName: false
    });

    sequelize.sync().then(() => {
        console.log('Node table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return Nodes;
    
}
