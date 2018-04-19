const express = require('express');
const router = express.Router();
const cookieSess = require('cookie-session');
require('env2')('./config.env');
const secret = process.env.SECRET;

const bodyParser = require('body-parser');

const home = require('./home');
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const profile = require('./profile');
const photo = require('./photo');
const add = require('./add');
const error = require('./error');

router.use(bodyParser.urlencoded({ extended: false }));

router.use(cookieSess({
    name: 'session',
    secret
}));

router.get('/', home.get);
router.get('/register', register.get);
router.get('/login', login.get);
router.get('/logout', logout.get);
router.get('/add', add.get);
router.get('/profile', profile.get);
router.get('/photo/:photoId', photo.get);

router.post('/register', register.get);
router.post('/login', login.post);
router.post('/add');

router.use(error.client);
router.use(error.server);
module.exports = router;
