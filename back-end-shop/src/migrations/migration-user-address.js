'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User_Address', {
            // userID: Sequelize.INTEGER,
            // address_line1: Sequelize.STRING,
            // address_line2: Sequelize.STRING,
            // city: Sequelize.STRING,
            // country: Sequelize.STRING,
            // phone: Sequelize.STRING
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },

            userID: {
                type: Sequelize.INTEGER,
            },
            address_line1: {
                type: Sequelize.STRING
            },
            address_line2: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            phone: {
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
        await queryInterface.dropTable('User_Address');
    }
};