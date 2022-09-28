'use strict';

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
      field: 'product_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      field: 'quantity'
    },
  }, {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true
  });

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'sale_id',
      as: 'sales',
    });
  };

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'product_id',
      as: 'product',
    });
  }; return SaleProduct;
}
