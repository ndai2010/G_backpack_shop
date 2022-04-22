'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Discounts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Discounts.init({
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        discount_percent: Sequelize.DECIMAL,
        active: Sequelize.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Discounts',
    });
    return Discounts;
};