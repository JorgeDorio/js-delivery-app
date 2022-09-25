'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      // references: {
      //   model: 'User',
      //   key: "id",
      // },
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      // references: {
      //   model: 'User',
      //   key: "id",
      // },
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    delivery_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sales',
    timestamps: false
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'seller',
    });
  }
  return Sale;
}
