# WAT

![Screenshot](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAR-AAAAJGQ3YzUyNTI5LWU4MTktNDU5ZC1hZDI2LTMxYzU2ODRlZWZiYQ.png)

WAT is Reddit clone focussed on full-stack web development.

Registered users can Add, Comment, and Favorite resources (videos, websites, books, etc.).

Find it live on the web here:    
http://watclient.herokuapp.com

## WAT Server

* This is the server-side of our W.A.T. app.
* The repo for the client-side is here: https://github.com/WAT-WeAreTools/client

#### Key Technologies Used

* [React](https://facebook.github.io/react/)
* [Node.js](https://nodejs.org)
* [Express](http://expressjs.com)
* [Knex.js](http://knexjs.org)
* [PostgreSQL](https://www.postgresql.org)
* [Passport](http://passportjs.org) (GitHub OAuth 2 strategy)
* [Heroku](http://heroku.com)

#### Routes

* /categories - Returns all categories.
* /resources - Returns all resources.
* /resources/:id - Returns a resource by its id.
* /resources/categories/:category - Returns all resources in a given category.

#### Run Locally

1. Clone project and cd into project directory.
2. Run these commands (requires Node.js):
```
$ npm i
$ npm start
```
Then visit:    
http://localhost:3000/api/v1/

#### Use Online

https://watserver.herokuapp.com/api/v1/

#### Created By

* Andrew Vandermeer
* Andy Knolla
* Christopher Comella
* Steven Lawson
