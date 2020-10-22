const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controller.js");

router.get("/login", users.login);
router.get("/logout", users.logout);

module.exports = router;
