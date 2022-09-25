'use strict';

module.exports = (sequelize, DataTypes) => {
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
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      foreignKey: 'saleId',
      through: SalesProducts,
      otherKey: 'productId',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      foreignKey: 'productId',
      through: SalesProducts,
      otherKey: 'saleId',
    });
  };
  return SalesProducts;
}
