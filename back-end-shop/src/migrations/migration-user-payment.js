'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User_payments', {
            // userID: Sequelize.INTEGER,
            // payment_type: Sequelize.STRING,
            // provider: Sequelize.STRING,
            // account: Sequelize.INTEGER,
            // expiry: Sequelize.DATE
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },
            userID: {
                type: Sequelize.INTEGER,
            },
            payment_type: {
                type: Sequelize.STRING
            },
            provider: {
                type: Sequelize.STRING
            },
            account: {
                type: Sequelize.INTEGER
            },
            expiry: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('User_payments');
    }
};