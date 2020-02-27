var app = require("./auth server/auth_server");
var apps = require("./TONE server/apps");
var port = process.env.PORT_AUTH;
var port1 = process.env.PORT_APP;
const user = require("./user/mongo/User");
const Sentry = require("@sentry/node");
require("dotenv").config();

Sentry.init({ dsn: process.env.SENTRY_DSN });

app.listen(port, function() {
	console.log("Express auth server listening on port " + port);
});

apps.listen(port1, function() {
	console.log("Express app server listening on port " + port1);
});

//=================================================================

Sentry.configureScope(function(scope) {
	scope.setUser({ username: user.name });
});
