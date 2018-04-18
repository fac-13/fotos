const db = require('./../db_connection');

const getAll = () => {
  db.query(`SELECT users.username, photos.title, photos.date, photos.description, photos.image_url FROM photos
  INNER JOIN users
  ON photos.user_id = users.id;`);
};
