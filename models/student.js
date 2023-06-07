module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student', {
        sfirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        studentNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        enrolmentDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        programme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        yearOfStudy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numOfModules: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modulesToBeRepeated: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fullTime: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    
    {
        // freezeTableName: false
    });

    sequelize.sync().then(() => {
        console.log('Student table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    return student;
    
}
