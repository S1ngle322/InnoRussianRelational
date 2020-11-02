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


router.post('/', (req, res) =>{
    let {phrase, translation, transcription, context, media, topic_name} = req.body;

    Phrase.create({
        phrase,
        translation,
        transcription,
        context,
        media,
        topic_name
    })
        .then(phrase => res.send(phrase))
        .catch(err => console.log(err));
});

module.exports = router;