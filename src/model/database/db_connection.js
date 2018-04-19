const pgp = require('pg-promise')();
const url = require('url');

require('env2')('./config.env');

let USERS_DB_URL = process.env.USERS_DB_URL;
let localDB = {};

if (process.env.TRAVIS === 'true') {
  localDB = {
    database: 'travis_ci_test'
  }
} else {
  if (process.env.NODE_ENV === 'test') {
    USERS_DB_URL = process.env.TEST_DB_URL;
  }


if (!USERS_DB_URL) throw new Error('Environment variable DB_URL must be set');

  const params = url.parse(DB_URL);
  const [username, password] = params.auth.split(':');


 localDB = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost'
};
} 

const connection = localDB;

//   const connection = process.env.NODE_ENV === 'production' ? herokuDB : localDB;

const db = pgp(connection);
module.exports = db;
