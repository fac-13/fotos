const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
  queries.getAll().then(data => res.render('home', { data }));
};
