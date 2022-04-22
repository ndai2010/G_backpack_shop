'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Shopping_Session', {
            // userID: Sequelize.STRING,
            // total: Sequelize.DECIMAL
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },

            userID: {
                type: Sequelize.STRING,
            },
            total: {
                type: Sequelize.DECIMAL
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
        await queryInterface.dropTable('Shopping_Session');
    }
};