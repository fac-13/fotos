const tape = require('tape');
const request = require('supertest');
const app = require('../src/app.js');

tape('home route returns a status code of 200', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });
});
