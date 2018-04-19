const tape = require('tape');
const request = require('supertest');
const app = require('../src/app.js');

const amelia = {
  username: 'Amelia',
  title: 'Palm trees',
  date: '2018-04-18T13:55:28.561Z',
  description: 'Palm trees in Los Angeles',
  image_url:
    'https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=923deb764c09e84be3f0b05317a2116d&auto=format&fit=crop&w=1498&q=80'
};

tape('home route returns a status code of 200', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      console.log(res.body);
      t.error(err);
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });
});
