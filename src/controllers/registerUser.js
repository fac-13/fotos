const queries = require('./../model/database/queries'); 
const bcrypt = require('bcrypt'); 

exports.get = (req, res) => {
    const username = req.body.username; 
    const password = req.body.password; 
    console.log("username", username);
    console.log("password", password);  
    bcrypt.hash(password, 8, (err, hash) => {
        if (err) {console.log("Bcrypt error", err)}
        else {
        console.log("Hash", hash); 
        queries.addUser(username, hash); 
        }
    }); 
    //after registration redirects the user to their profile
    // res.redirect( `/profile/:${username}`)
}; 
