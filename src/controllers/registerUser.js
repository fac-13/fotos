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
        queries
        .addUser(username, password)
        .then (username => res.redirect( `/profile/:username`))
        .catch(err => 
        { console.log("addUser query error:", err.message)
          if (err.message.includes('duplicate key value'))
          {
           console.log("Registration err", err.message)
           res.cookie('Registration error', 'Username already taken', {maxAge: 10000, secure: true})
           res.send(); 
          }  
        })  
    }  
    })
}; 
