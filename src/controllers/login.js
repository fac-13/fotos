exports.get = (req, res) => {
    res.render('login', { activePage: { login: true } });
};