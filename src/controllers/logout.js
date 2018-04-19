exports.get = (req, res) => {
    req.session = null;
    res.render('logout', { activePage: { logout: true } });
};