exports.get = (req, res) => {
  res.render('add', { activePage: { add: true }, loggedIn: true, username: req.session.username });
};
