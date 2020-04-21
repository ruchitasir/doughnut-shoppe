'use strict';
module.exports = (sequelize, DataTypes) => {
  const donut = sequelize.define('donut', {
    name: DataTypes.STRING,
    frosting: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    shopId: DataTypes.INTEGER
  }, {});
  donut.associate = function(models) {
    models.donut.belongsTo(models.shop)
    models.donut.belongsToMany(models.customer,{
      through: 'customers_donuts',
      onDelete: 'CASCADE'
    })
  };
  return donut;
};
