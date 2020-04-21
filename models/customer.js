'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
    models.customer.belongsToMany(models.donut,{
      through: 'customers_donuts',
      onDelete: 'CASCADE'
    })
  };
  return customer;
};