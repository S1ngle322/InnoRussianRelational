const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require("./config/database");

db.authenticate()
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Error" + err));

const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('INDEX'));

app.use('/phrase', require('./routes/phrases'));
app.use('/topic', require('./routes/topics'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started at " + PORT));