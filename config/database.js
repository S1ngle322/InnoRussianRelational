const { Sequelize } = require('sequelize');
module.exports = new Sequelize('innorussiandb', 'postgres', 'secrets', {
    host: 'localhost',
    dialect: 'postgres'
});