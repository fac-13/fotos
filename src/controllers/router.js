const express = require('express');
const router = express.Router();

const home = require('./home');
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const profile = require('./profile');
const photo = require('./photo');
const add = require('./add');
const error = require('./error');

router.get('/', home.get);
router.get('/register', register.get);
router.get('/login', login.get);
router.get('/logout', logout.get);
router.get('/add', add.get);
router.get('/profile', profile.get);
router.get('/photo/:imageID', photo.get);

router.post('/register', register.get);
router.post('/login');
router.post('/add');

router.use(error.client);
router.use(error.server);
module.exports = router;
