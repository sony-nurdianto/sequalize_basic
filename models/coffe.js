'use strict';
module.exports = (sequelize, DataTypes) => {
  const coffe = sequelize.define('coffe', {
    nama: DataTypes.STRING,
    bean: DataTypes.STRING,
    method: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  coffe.associate = function(models) {
    // associations can be defined here
  };
  return coffe;
};