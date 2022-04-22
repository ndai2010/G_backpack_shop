'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Order_Details', {

            // userID: Sequelize.INTEGER,
            // total: Sequelize.DECIMAL,
            // paymentId: Sequelize.INTEGER,

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },

            userID: {
                type: Sequelize.INTEGER
            },
            total: {
                type: Sequelize.DECIMAL
            },
            paymentId: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Order_Details');
    }
};