const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
    queries
        .userPhotos(req.session.username)
        .then(data => {
            res.render('profile', { activePage: { profile: true }, loggedIn: true, username: req.session.username, data });
        })
        .catch((err) => {
            console.log("Login error:", err)
            next(err)
        })
};  