// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const coffe = sequelize.define('coffe', {
//     nama: DataTypes.STRING,
//     bean: DataTypes.STRING,
//     method: DataTypes.STRING,
//     price: DataTypes.INTEGER
//   }, {});
//   coffe.associate = function(models) {
//     // associations can be defined here
//   };
//   return coffe;
// };

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Coffe = sequelize.define("coffes", {
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bean: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  method: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Coffe;
