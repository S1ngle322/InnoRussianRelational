const Sequelize = require('sequelize');
const db = require('../config/database');

const Phrase = db.define('phrase', {
    translation: {
        type: Sequelize.STRING
    },
    transcription: {
        type: Sequelize.STRING
    },
    context: {
        type: Sequelize.STRING
    },
    media: {
        type: Sequelize.BOOLEAN
    },
    topic_name: {
        type: Sequelize.STRING
    }
})

module.exports = Phrase;