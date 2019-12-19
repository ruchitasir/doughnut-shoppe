'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers_donuts = sequelize.define('customers_donuts', {
    customerId: DataTypes.INTEGER,
    donutId: DataTypes.INTEGER
  }, {});
  customers_donuts.associate = function(models) {
    // associations can be defined here
  };
  return customers_donuts;
};