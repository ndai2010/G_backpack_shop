'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Discounts', {
            // name: Sequelize.STRING,
            // description: Sequelize.TEXT,
            // discount_percent: Sequelize.DECIMAL,
            // active: Sequelize.BOOLEAN,

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },

            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT
            },
            discount_percent: {
                type: Sequelize.DECIMAL
            },
            active: {
                type: Sequelize.BOOLEAN
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Discounts');
    }
};