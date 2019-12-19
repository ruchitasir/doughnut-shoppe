'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
    models.customer.belongsToMany(models.donut, {
      through: 'customers_donuts'
    })
  };
  return customer;
};
