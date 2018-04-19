const queries = require('./../model/database/queries');
const bcrypt = require('bcrypt');

exports.post = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 8, (err, hash) => {
    if (err) {
      console.log('Bcrypt error', err);
    } else {
      queries
        .addUser(username, password)
        .then(username => res.redirect(`/profile/:username`))
        .catch(err => {
          if (err.message.includes('duplicate')) {
            console.log('Registration err -', err.message);
            req.session.errormessage = 'Username already taken';
            res.redirect('/');
          }
        });
    }
  });
};
