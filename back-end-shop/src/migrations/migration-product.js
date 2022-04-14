'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            // name: Sequelize.STRING,
            // description: Sequelize.TEXT,
            // SKU: Sequelize.STRING,
            // categoryID: Sequelize.INTEGER,
            // inventoryID: Sequelize.INTEGER,
            // discountID: Sequelize.INTEGER,
            // price: Sequelize.DECIMAL,
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT
            },
            SKU: {
                type: Sequelize.STRING
            },
            categoryID: {
                type: Sequelize.INTEGER
            },
            inventoryID: {
                type: Sequelize.INTEGER
            },
            discountID: {
                type: Sequelize.INTEGER
            },
            price: {
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
        await queryInterface.dropTable('Products');
    }
};