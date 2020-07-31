const Sequelize = require('sequelize');
const db = require('../configuration/config');

const service1 = db.define(
    'azurestudent',
    {
        id: {
            type: Sequelize.INTEGER,
            AllowNull: false,
            primaryKey: true
        },
        user: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        class: {
            type: Sequelize.STRING,
            AllowNull: true
        }

    },
    {
        tableName: 'azurestudent',
        timestamps:false
    }
);

module.exports =service1;
