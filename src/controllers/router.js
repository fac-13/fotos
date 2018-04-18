//this is router file

const express = require('express');
const path = require('path');
const router = express.Router();
const queries = require('./../model/database/queries');
const home = require('./renderHome');

router.get('/', (req, res, next) =>
  queries
    .getAll()
    .then(data => res.status(200).json(data))
    .then(data => home.get)
    .catch(err => next(err))
);

module.exports = router;
