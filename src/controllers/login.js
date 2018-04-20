const home = require('./home');
const bcrypt = require('bcrypt');
const queries = require('./../model/database/queries');

exports.get = (req, res) => {
    res.render('login', { activePage: { login: true } });
};

exports.post = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    queries
        .checkUserDetails(username)
        .then(data => {
            if (data.length > 0) {
                return bcrypt.compare(password, data[0].password);
            } else {
                return false;
            }
        })
        .then(result => {
            if (result === true) {
                req.session.loggedIn = true;
                req.session.username = req.body.username;
                res.redirect(`/profile/${req.session.username}`);
            }
            else {
                console.log("Username and password not matching");
                res.render('login', { activePage: { login: true }, notmatch: true });
            }
        })
        .catch((err) => {
            console.log("Login error:", err);
            next(err);
        })
}

