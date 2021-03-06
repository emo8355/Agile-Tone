define({ "api": [
  {
    "type": "Route",
    "url": "/",
    "title": "indexrouter",
    "group": "/",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "get",
            "optional": false,
            "field": "/",
            "description": "<p>render the login page</p>"
          },
          {
            "group": "Success 200",
            "type": "post",
            "optional": false,
            "field": "/login",
            "description": "<p>render a login form</p>"
          },
          {
            "group": "Success 200",
            "type": "post",
            "optional": false,
            "field": "/register",
            "description": "<p>signup as a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "login success",
          "content": "{\n\t\"user\": {\n\t    \"_id\": \"user id\",\n\t    \"name\": \"username\",\n\t    \"email\": \"account number\",\n\t    \"__v\": 0\n\t},\n\t\"token\": \"token\"\n}",
          "type": "json"
        },
        {
          "title": "register success",
          "content": "{\n\t\"user\": {\n\t    \"_id\": \"user id\",\n\t    \"name\": \"username\",\n\t    \"email\": \"account number\",\n\t    \"__v\": 0\n\t},\n\t\"token\": \"token\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "login form",
        "content": "{\n\t\"email\": \"your account email\",\n\t\"password\": \"your password\"\n}",
        "type": "json"
      },
      {
        "title": "register form",
        "content": "{\n\t\"name\": \"username\",\n\t\"email\": \"register eamil\",\n\t\"password\": \"your password\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./TONE server/apps.js",
    "groupTitle": "/",
    "name": "Route"
  },
  {
    "type": "Route",
    "url": "/users",
    "title": "user account management",
    "group": "/users_localhost:4000",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "post",
            "optional": false,
            "field": "/",
            "description": "<p>create users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "form data to create user",
          "content": "{\n    \"name\": \"Your username\",\n    \"email\": \"Your Email\",\n    \"Password\": Your password\n\n}",
          "type": "json"
        },
        {
          "title": "form data got send to DB",
          "content": "{\n   \"_id\": \"5e570fae93b7cfa96b4d9f40\",\n   \"name\": \"tryMe\",\n   \"email\": \"111@yh.com\",\n   \"password\": \"pass\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "post",
            "optional": false,
            "field": "/users",
            "description": "<p>HTTP/1.1 500 Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User db error",
          "content": "{\n\t\"error\": \"There was a problem adding the information to the database.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth server/auth_server.js",
    "groupTitle": "/users_localhost:4000",
    "name": "RouteUsers"
  }
] });
