const Sequelize = require("sequelize");

const sequelize = new Sequelize("fuse_db", "root", "", {
  host: "host.docker.internal",
  dialect: "mysql",
});

module.exports = sequelize;
