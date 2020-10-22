const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");

module.exports = (_id, res) => {
  const payload = { _id };
  const secret = authConfig.secret;
  const expiresIn = authConfig.expiresIn;

  const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
  const refreshToken = jwt.sign(payload, secret, { expiresIn: 2 * expiresIn });

  res.cookie("au", token, { httpOnly: true });
  res.cookie("rau", refreshToken, { httpOnly: true });
};
