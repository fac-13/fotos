//this is router file

const express = require('express');
const path = require('path');
const router = express.Router();

// const queries = require('./../model/database/queries');
// const home = require('./renderHome');
//
// router.get('/', (req, res, next) =>
//   queries
//     .getAll()
//     .then(data => res.status(200).json(data))
//     .then(data => home.get)
//     .catch(err => next(err))
// );

const home = require('./home');
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const profile = require('./profile');
const photo = require('./photo');
const add = require('./add');

const error = require('./error');

// GET METHOD
router.get('/', home.get);
router.get('/register', register.get);
router.get('/login', login.get);
router.get('/logout', logout.get);
router.get('/add', add.get);

router.get('/profile', profile.get);
router.get('/photo/:imageID', photo.get);

// POST METHOD

// For getting the username and password
router.post('/login');
// For getting the photo that has been posted
router.post('/add');

router.use(error.client);
router.use(error.server);
module.exports = router;
