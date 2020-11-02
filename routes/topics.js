const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Topic = require('../models/Topic');

router.get('/', (req, res) =>
    Topic.findAll()
        .then(topic => {
            console.log(topic);
            res.sendStatus(200);
        })
        .catch(err => console.log("Error " + err)));

router.post('/', (req, res) =>{
    let {name, description} = req.body;

    Topic.create({
        name,
        description
    })
        .then(topic => res.send(topic))
        .catch(err => console.log(err));
});

module.exports = router;