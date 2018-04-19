const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
  queries.getAll()
    .then(data => res.render('home', { data }))
    .catch( (err) => {
      console.log(`The error is: ${err.message}`); 
      next(err);
    });
};
