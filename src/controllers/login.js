const home = require('./home');

exports.get = (req, res) => {
    res.render('login', { activePage: { login: true } });
};

exports.post = (req, res) => {
    // IF THE PASSWORD IS CORRECT then:
    req.session.loggedIn = true;
    req.session.username = req.body.username;
    res.redirect('/');
}