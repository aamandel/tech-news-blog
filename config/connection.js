// import Sequelize
const Sequelize = require('sequelize');

// use env vars for db name, user, and pass
require('dotenv').config();

// create connection to tech news database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;