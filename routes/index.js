const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.route("/").get((req, res) => {
	res.render("login", {
		message: "Hello please enter your account and password",
		messageClass: "alert-success"
	});
});

router.route("/login").post((req, res) => {
	fetch("http://localhost:4000/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(req.body)
	})
		.then((res) => res.json())
		.then((json) => {
			res.cookie("token", json["token"]);
			res.redirect("/users/index");
		})
		.catch((err) => {
			res.status(403).send(err);
		});
});

router
	.route("/register")
	.get((req, res) => {
		res.render("register", {
			message: "please sign up",
			messageClass: "alert-success"
		});
	})
	.post((req, res) => {
		const p = req.body.password;
		const cP = req.body.password_comfirm;
		if (p !== cP) {
			res.render("register", {
				message: "password not match, try again",
				messageClass: "alert-danger"
			});
			return;
		}
		const body = { name: req.body.name, email: req.body.email, password: p };
		fetch("http://localhost:4000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then((res) => res.json())
			.then((json) => {
				res.cookie("token", json["token"]);
				res.redirect("/users/index");
			})
			.catch((err) => console.log(err));
	});

router.route("/logout").get((req, res) => {
	res.clearCookie("token");
	res.render("login", {
		message: "Successfully logout",
		messageClass: "alert-success"
	});
});

router.get("/error", (req, res) => {
	throw new Error("Hello error");
});

module.exports = router;
