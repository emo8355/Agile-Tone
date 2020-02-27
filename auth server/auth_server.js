var express = require("express");
var app = express();
require("../DB/db");

app.use("/apidoc", express.static("docs"));

var UserController = require("../user/Auth_Controller");

/**
 * @api {DBuserRouter}
 * @apiGroup /users localhost:4000
 * @api {Route} /users user account management
 * @apiSuccess {post} / create users
 * @apiSuccessExample {json} form data to create user
 *  {
 *      "name": "Your username",
 *      "email": "Your Email",
 *      "Password": Your password
 *
 *  }
 * @apiSuccessExample {json} form data got send to DB
 *  {
 *     "_id": "5e570fae93b7cfa96b4d9f40",
 *     "name": "tryMe",
 *     "email": "111@yh.com",
 *     "password": "pass",
 *     "__v": 0
 *  }
 * @apiError {post} /users HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} User db error
 * 	{
 * 		"error": "There was a problem adding the information to the database."
 * 	}
 */
app.use("/users", UserController);

var AuthController = require("../auth/AuthController");
app.use("/api/auth", AuthController);

module.exports = app;
