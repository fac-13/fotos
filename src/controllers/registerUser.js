const queries = require('./../model/database/queries');
const bcrypt = require('bcrypt');
const register = require('./register');

exports.post = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  s;
  bcrypt.hash(password, 8, (err, hash) => {
    if (err) {
      console.log(`Bcrypt error is: ${err.message}`);
      next(err);
    } else {
      queries
        .addUser(username, password)
        .then(username => res.redirect(`/profile/:username`))
        .catch(err => {
          if (err.message.includes('duplicate key value')) {
            res.render('register', {
              activePage: { register: true },
              error: 'Username taken'
            });
          } else {
            console.log(`The error is: ${err.message}`);
            next(err);
          }
        });
    }
  });
};
