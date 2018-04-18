const queries = require('./../model/database/queries');

exports.get = (req, res, next) => {
  const { imageID } = req.params;
  queries.getPhoto(imageID).then(data => {
    res.render('photo', { data });
  });
};
