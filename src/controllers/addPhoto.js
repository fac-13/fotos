const queries = require('./../model/database/queries');
const bodyParser = require('body-parser');

exports.get = (req, res) => {
  console.log('reached addPhoto.js');
  const title = req.body.title;
  const description = req.body.description;
  const imageUrl = req.body.imageURL;
  queries.postPhoto(title, description, imageUrl);
};
