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

const addUser = (username, hash) => {
  console.log("username", username); 
  return db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [username, hash]); 
}; 

module.exports = {
  getAll,
  getPhoto, 
  addUser
};
