'use strict';

const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SaleProduct', {
    sale_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'salesProducts',
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.Sale, {
      through: SalesProducts,
      foreignKey: 'sale_id',
      as: 'sale',
    });
  };

  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.Products, {
      through: SalesProducts,
      foreignKey: 'product_id',
      as: 'product',
    });
  };
  
  return SalesProducts;
}
