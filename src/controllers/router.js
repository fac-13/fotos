//this is router file

const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./renderHome');
router.get('/', home.get);

module.exports = router;
