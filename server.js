// Dependecies
require('dotenv').config()
const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session')

const seed = require('./seed');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));


// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/routes'));

// Start the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });