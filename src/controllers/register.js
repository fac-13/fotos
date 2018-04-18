exports.get = (req, res) => {
    res.render('register', { activePage: { register: true } });
};  