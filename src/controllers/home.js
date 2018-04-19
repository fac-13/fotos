const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
  if (req.session.loggedIn) {
    queries
      .getAll()
      .then(data =>
        res.render('home', {
          data,
          loggedIn: true,
          username: req.session.username
        })
      )
      .catch(err => {
        console.log(`The error is: ${err.message}`);
        next(err);
      });
  } else {
    queries
      .getAll()
      .then(data => {
        console.log(data);
        res.render('home', { data });
      })

      .catch(err => {
        console.log(`The error is: ${err.message}`);
        next(err);
      });
  }
};
