exports.get = (req, res) => {
    res.render('logout', { activePage: { logout: true }, loggedIn: true });
};