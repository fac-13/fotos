const db = require('./db_connection');

const getAll = () => {
  return db.query(`SELECT users.username, photos.title, photos.date, photos.description, photos.image_url, photos.id FROM photos
  INNER JOIN users
  ON photos.user_id = users.id;`);
};

const getPhoto = photoId => {
  return db.query(`SELECT users.username, photos.title, photos.date, photos.description, photos.image_url FROM photos
  INNER JOIN users
  ON photos.user_id = users.id WHERE photos.id = ${photoId};`);
};

const postPhoto = (title, description, url) => {
  console.log('reached postPhoto query');
  return db.query(
    `INSERT INTO photos (title, description, image_url) VALUES ($1, $2, $3)`,
    [title, description, url]
  );
};

module.exports = {
  getAll,
  getPhoto,
  postPhoto
};
