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

    sequelize.sync().then(() => {
        console.log('Candidate table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return candidate;
    
}
