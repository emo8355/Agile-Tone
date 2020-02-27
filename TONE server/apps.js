const express = require("express");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const indexRoute = require("../routes/index");
const userRoute = require("../routes/user");
const VerifyToken = require("../auth/VerifyToken");

const app = express();

app.engine(
	"hbs",
	exphbs({
		extname: "hbs"
	})
);
app.set("view engine", "hbs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/apidoc", express.static("doc"));

/**
 * @api {indexrouter}
 * @apiGroup /
 * @api {Route} / indexrouter
 * @apiSuccess {get} / render the login page
 * @apiSuccess {post} /login render a login form
 * @apiSuccess {post} /register signup as a user
 * @apiExample {json} login form
 * {
 * 	"email": "your account email",
 * 	"password": "your password"
 * }
 * @apiExample {json} register form
 * {
 * 	"name": "username",
 * 	"email": "register eamil",
 * 	"password": "your password"
 * }
 * @apiSuccessExample {json} login success
 * {
 * 	"user": {
 * 	    "_id": "user id",
 * 	    "name": "username",
 * 	    "email": "account number",
 * 	    "__v": 0
 * 	},
 * 	"token": "token"
 * }
 * @apiSuccessExample {json} register success
 * {
 * 	"user": {
 * 	    "_id": "user id",
 * 	    "name": "username",
 * 	    "email": "account number",
 * 	    "__v": 0
 * 	},
 * 	"token": "token"
 * }
 */
app.use("/", indexRoute);

app.use("/users", VerifyToken, userRoute);

module.exports = app;
