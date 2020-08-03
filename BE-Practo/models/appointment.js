'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    userId: DataTypes.INTEGER,
    docterId: DataTypes.INTEGER,
    appointmentTime: DataTypes.STRING
  }, {});
  appointment.associate = function(models) {
    // associations can be defined here
    appointment.belongsTo(models.user)
    appointment.belongsTo(models.docter)


  };
  return appointment;
};