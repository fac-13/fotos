const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
    const username = req.session.username;
    if (username !== req.params.username) {
        queries
            .userPhotos(req.params.username)
            .then(data => {
                if (data.length > 0) {
                    if (username) {
                        res.render('profile', { activePage: { profile: true }, loggedIn: true, username, data });
                    } else {
                        res.render('profile', { activePage: { profile: true }, loggedIn: false, data });
                    }
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
                res.render('profile', { activePage: { profile: true }, loggedIn: true, username, data });
            })
            .catch((err) => {
                console.log("query error:", err)
                next(err)
            })
    }

};  