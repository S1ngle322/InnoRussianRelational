const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.send('INDEX'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started at " + PORT));