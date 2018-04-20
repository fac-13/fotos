const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
    const username = req.session.username;
    if (username !== req.params.username) {
        queries
            .userPhotos(req.params.username)
            .then(data => {
                if (data.length > 0) {
                    res.render('profile', { activePage: { profile: true }, loggedIn: true, username: req.params.username, data });
                } else {
                    next();
                }
            })
            .catch((err) => {
                console.log("query error:", err)
                next(err)
            })
    } else {
        queries
            .userPhotos(username)
            .then(data => {
                res.render('profile', { activePage: { profile: true }, loggedIn: true, username: username, data });
            })
            .catch((err) => {
                console.log("query error:", err)
                next(err)
            })
    }

};  