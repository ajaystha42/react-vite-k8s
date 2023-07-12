const express = require("express");
const UserController = require("./../controllers/UserController");
const checkAuth = require("./../middleware/check-auth");
const Router = express.Router();

Router.post("/api/user/signup", UserController.signUp);
Router.post("/api/user/login", UserController.login);

module.exports = Router;
