const mongoose = require("mongoose");
const usersSchema = require("../schemas/users.schema");
const users = mongoose.model("users", usersSchema, "users");

module.exports = users;
