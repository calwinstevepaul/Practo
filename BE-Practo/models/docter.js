'use strict';
module.exports = (sequelize, DataTypes) => {
  const docter = sequelize.define('docter', {
    docterImage: DataTypes.STRING,
    name: DataTypes.STRING,
    specialties: DataTypes.STRING,
    timings: DataTypes.STRING,
    experience: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
  }, {});
  docter.associate = function(models) {
    // associations can be defined here
    docter.hasMany(models.appointment)
  };
  return docter;
};