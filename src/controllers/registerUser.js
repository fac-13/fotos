const queries = require('./../model/database/queries');
const bcrypt = require('bcrypt');

exports.post = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, 8, (err, hash) => {
        if (err) { console.log("Bcrypt error", err) }
        else {
            queries
                .addUser(username, hash)
                .then(username => res.redirect(`/profile/:username`))
                .catch(err => {
                    console.log("addUser query error:", err.message)
                    if (err.message.includes('duplicate key value')) {
                        console.log("Registration err", err.message)
                        req.errorCookie.errorMessage = 'Username already taken';
                    }
                })
        }
    })
}; 
