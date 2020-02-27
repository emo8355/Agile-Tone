const user = require("./user/mongo/User");

require("dotenv").config();
const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_DSN });


Sentry.configureScope(function(scope) {
    scope.setUser({"username": user.name});
});

