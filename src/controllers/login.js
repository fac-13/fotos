const home = require('./home');
const bcrypt = require('bcrypt');
const queries = require('./../model/database/queries');

exports.get = (req, res) => {
    res.render('login', { activePage: { login: true } });
};

exports.post = (req, res) => {
    const username = req.body.username; 
    const password = req.body.password; 
    queries
    .checkUserDetails(username)
    .then(data => bcrypt.compare(password, data[0].password))
    .then(result => {
        if (result === true){
        req.session.loggedIn = true;
        req.session.username = req.body.username;
        res.redirect('/');
        }
        else {
        console.log("Username and password not matching"); 
        res.redirect('/'); 
        }
    })
    .catch((err) => console.log("Login error:", err))
}

