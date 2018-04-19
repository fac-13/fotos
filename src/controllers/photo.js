const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
  const { photoId } = req.params;
  queries
    .getPhoto(photoId)
    .then(data => {
      console.log(photoId);
      console.log(data);
      res.render('photo', { data });
    })
    .catch(err => {
      console.log(`The error is: ${err.message}`);
      next(err);
    });
};
