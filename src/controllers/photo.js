const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
  const { photoId } = req.params;
  queries.getPhoto(photoId).then(data => {
    res.render('photo', { data });
  });
};
