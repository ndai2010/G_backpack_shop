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
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        discount_percent: DataTypes.DECIMAL,
        active: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Discounts',
    });
    return Discounts;
};