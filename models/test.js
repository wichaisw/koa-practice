const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    name: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    }
  });

  return test;
}
