const Users = require("../models/users.model");
const setJwt = require("../authentication/jwt-set");
exports.login = async (req, res) => {
  const user = await Users.findOne({ name: "xu", password: "132" });
  setJwt(user._id, res);
  res.json({
    status: "ok",
  });
};

exports.logout = async (req, res) => {
  res.json({
    status: "ok",
  });
};
