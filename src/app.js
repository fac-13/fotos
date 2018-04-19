require('env2')('./config.env');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/router');
const helpers = require('./views/helpers/helpersIndex');
const app = express();
const cookieSess = require('cookie-session');
const secret = process.env.SECRET;

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(
  cookieSess({
    name: 'session',
    keys: [secret]
  })
);

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers
  })
);
app.use(
  cookieSess({
    name: 'session',
    keys: [secret],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
