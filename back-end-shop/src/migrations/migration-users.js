'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            // userName: Sequelize.STRING,
            // password: Sequelize.STRING,
            // email: Sequelize.STRING,
            // firstName: Sequelize.STRING,
            // lastName: Sequelize.STRING,
            // phone: Sequelize.INTEGER,
            // role: Sequelize.STRING

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING
            },
            role: {
                type: Sequelize.STRING,
                allowNull: false
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('Users');
    }
};