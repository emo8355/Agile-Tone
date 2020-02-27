const express = require("express");
const router = express.Router();
const User = require("../user/mongo/User");
const tone = require("../Src/analysis").get_tone;
const get_eomoji = require("../Src/displayemoji").emoji;
require("dotenv").config;

router
	.route("/index")
	.get((req, res) => {
		User.findById(req.userId, { password: 0 }, function(err, user) {
			if (err)
				return res.status(500).send("There was a problem finding the user.");
			if (!user) return res.status(404).send("No user found.");
			res.render("index", {
				message: `Hello ${user.name}`,
				messageClass: "alert-success",
				inline_style: "font-size:8em"
			});
		});
	})
	.post((req, res) => {
		const inputtext = req.body;
		tone(inputtext).then((value) => {
			res.render("index", {
				text: req.body.inputtext,
				textClass: "alert-success",
				message: `${get_eomoji(value)}`,
				messageClass: "alert-success",
				inline_style: "font-size:8em"
			});
		});
	});
module.exports = router;
