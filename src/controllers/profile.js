exports.get = (req, res) => {
    res.render('profile', { activePage: { profile: true }, loggedIn: true });
};  