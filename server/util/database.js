const Sequelize = require("sequelize");

const sequelize = new Sequelize("fuse_db", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
