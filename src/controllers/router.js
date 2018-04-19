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
const registerUser = require('./registerUser'); 

router.get('/', home.get);
//loads register form page
router.get('/register', register.get);
router.get('/login', login.get);
router.get('/logout', logout.get);
router.get('/add', add.get);
router.get('/profile/:username', profile.get);
router.get('/photo/:photoId', photo.get);

//get user data from post
router.post('/register', registerUser.get);
router.post('/login');
router.post('/add');

router.use(error.client);
router.use(error.server);
module.exports = router;
