# fotos

**FOTOS** (https://fotos124.herokuapp.com/) is a website where you can share your photos.

**USER STORIES**
* I can view everyone's posted photos on the website.
* I can click on each photo and go to that photo's page.
* I can click on a username and go to that profile page (listing the photos that they have taken)
* I will be informed if I try and access a page that doesn't exist (404 error), or if there is a 500 server error.
* I can register (with register form validation), and it will automatically log me in.
* I can login using my password and username. My password is stored securely.
* I can look at my own profile.
* I can upload a photo.
* I can log out.

## How to run the project locally
1. `git clone https://github.com/fac-13/fotos.git`
2. Run `npm i` to install the required modules.
3. Set up the local database by:
    1. Connect to postgres, either by `psql` (`pgcli`) in the terminal on MAC, and `sudo -u postgres psql` on ubuntu.
    2. Create the database by typing `CREATE DATABASE [the name of the database];`. It's best not to use a hyphen (`-`) or uppercase letters in your database name.
    3. Create a superuser with a password - type in `CREATE USER [the new username] WITH SUPERUSER PASSWORD '[the password of the database]';`
    4. Change ownership of the database to the new user by typing `ALTER DATABASE [name of the database] OWNER TO [the new username];`
4. Add a config.env file in the root folder and add the database's url in this format: 
  ```js
  USERS_DB_URL = [the heroku database]
  TEST_DB_URL = postgres://[username]:[password]@localhost:5432/[databasename]

  SECRET = TAKA
  ```
5. Exit postgres and the run `npm run build` to build the database. (or Build the database by connecting to postgres and typing `\i` \+ correct path + `/fotos/src/model/database/db_build.sql`)
6. You should now be able to run tests (using `npm test`) and also run `npm run start:watch` and access the site at localhost:3000. 
