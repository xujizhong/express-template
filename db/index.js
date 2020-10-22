const mongoose = require("mongoose");
const dbConfig = require("../config/db.config");
module.exports = () => {
  mongoose.set("useFindAndModify", false); //DeprecationWarning: collection.findAndModify is deprecated....
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Mongodb connect error !"));
  db.once("open", () => {
    console.log("Mongodb started !");
  });
  mongoose.connect(dbConfig.path, { useNewUrlParser: true });
};
