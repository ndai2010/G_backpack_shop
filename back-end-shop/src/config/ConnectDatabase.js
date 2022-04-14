import { Sequelize } from "sequelize"
let connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const sequelize = new Sequelize('g-shop', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});
export default connect