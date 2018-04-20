const queries = require('./../model/database/queries');
const bcrypt = require('bcrypt');
const register = require('./register');

exports.post = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, 8, (err, hash) => {
        if (err) {
            console.log(`Bcrypt error is: ${err.message}`);
            next(err);
        } else {
            queries
                .addUser(username, hash)
                .then(username => {
                    req.session.loggedIn = true;
                    req.session.username = req.body.username;
                    res.redirect(`/profile/${req.session.username}`);
                })
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
