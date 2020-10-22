const userRouter = require("./users.route");

const routes = (app) => {
  app.use("/api/users", userRouter);
};

module.exports = routes;
