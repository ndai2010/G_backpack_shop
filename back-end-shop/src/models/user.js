'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        userName: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        role: Sequelize.STRING
    }, {
        sequelize,
        modelName: 'Users',
    });
    return User;
};