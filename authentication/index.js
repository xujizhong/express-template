const expressJwt = require("express-jwt");
const authConfig = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const setJwt = require("../authentication/jwt-set");

module.exports = (app) => {
  app.use(
    expressJwt({
      secret: authConfig.secret, // 签名的密钥 或 PublicKey
      algorithms: [authConfig.algorithms],
      getToken: function fromHeaderOrQuerystring(req) {
        if (req.cookies && req.cookies.au) {
          return req.cookies.au;
        }
        return null;
      },
    }).unless({ path: authConfig.unlessPath })
  );

  app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      const refreshToken = req.cookies && req.cookies.rau;
      try {
        const decoded = jwt.verify(refreshToken, authConfig.secret);
        const { _id } = decoded;
        setJwt(_id, res);
        next();
      } catch (e) {
        res.status(401).send("invalid token");
      }
    }
  });
};
