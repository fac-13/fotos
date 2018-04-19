exports.get = (req, res) => {
    const username = req.username; 
    const password = req.password;  
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {console.log("Bcrypt error", err)}
        else addUser(username, hash); 
    }); 
    //after registration redirects the user to their profile
    res.redirect( `/profile/:${username}`)
}; 
