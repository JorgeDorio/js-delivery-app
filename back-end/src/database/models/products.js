'use strict';

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true
  });

  return Products;
}
