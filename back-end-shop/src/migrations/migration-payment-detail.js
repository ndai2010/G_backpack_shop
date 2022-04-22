'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Payment_Details', {
            // orderID: Sequelize.INTEGER,
            // amount: Sequelize.INTEGER,
            // provider: Sequelize.STRING,
            // status: Sequelize.STRING

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },

            orderID: {
                type: Sequelize.INTEGER,
            },
            amount: {
                type: Sequelize.INTEGER
            },
            provider: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Payment_Details');
    }
};