const queries = require('./../model/database/queries');

exports.get = (req, res) => {
  queries.getAll().then(data => res.render('home', { data }));
};
