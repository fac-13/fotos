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
        // const userDetails = []; 
        // userDetails.push(username, password)
        // console.log("userDetails", userDetails); 
        // queries.addUser(userDetails); 
        queries
        .addUser(username, password)
        .catch(err => console.log("addUser query error:", err))         
        }
    })
    //after registration redirects the user to their profile
    // res.redirect( `/profile/:${username}`)
}; 
