const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Phrase = require('../models/Phrase');

router.get('/', (req, res) =>
    Phrase.findAll()
        .then(phrase => {
            console.log(phrase);
            res.sendStatus(200);
        })
        .catch(err => console.log("Error " + err)));

module.exports = router;