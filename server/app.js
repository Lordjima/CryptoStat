const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const {getIndexPage} = require('./routes/index');
const {getAboutPage} = require('./routes/about');
const {getContactPage} = require('./routes/contact');
const {getCryptoPage} = require('./routes/crypto');

// CONFIG
app.set('port', port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, '/'))); // configure express to use public folder

app.get('/', getIndexPage);
app.get('/about', getAboutPage);
app.get('/contact', getContactPage);
app.get('/crypto', getCryptoPage);

// LISTEN
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});