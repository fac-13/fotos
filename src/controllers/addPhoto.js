const queries = require('./../model/database/queries');
const bodyParser = require('body-parser');

exports.post = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageUrl = req.body.imageURL;
  const username = req.session.username;
  console.log(username);
  queries
    .getUserId(username)
    .then(result => queries.postPhoto(result[0].id, title, description, imageUrl))
    .then(res.redirect('/'))
    .catch(err => {
      console.log(`The error is: ${err.message}`);
      next(err);
    });
};
