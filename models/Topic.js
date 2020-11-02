const Sequelize = require('sequelize');
const db = require('../config/database');

const Topic = db.define('topic', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
})

module.exports = Topic;