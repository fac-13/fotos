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
const addPhoto = require('./addPhoto');
const registerUser = require('./registerUser');

router.use(bodyParser.urlencoded({ extended: false }));

router.use(
  cookieSess({
    name: 'session',
    keys: [secret]
  })
);

// router.use(
//   cookieSess({
//     name: 'errorcookie',
//     maxAge: 10000,
//     keys: [secret]
//   })
// );

router.get('/', home.get);
//loads register form page
router.get('/register', register.get);
router.get('/login', login.get);
router.get('/logout', logout.get);
router.get('/add', add.get);
router.get('/profile/:username', profile.get);
router.get('/photo/:photoId', photo.get);
router.post('/add', addPhoto.post);
router.post('/register', registerUser.post);
router.post('/login', login.post);

router.use(error.client);
router.use(error.server);
module.exports = router;
