const { QueryFile } = require('pg-promise');
const path = require('path');
const db = require('./db_connection');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./db_build.sql');

db
  .query(build)
  .then(res => console.log('res', res))
  .catch(e => console.error('error', e));
