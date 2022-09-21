'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
*/

const Sale = (sequelize, DataTypes) => {
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
      references: {
        model: 'User',
        key: "id",
      },
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: "id",
      },
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
    timestamp: false
  });
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      through: Sale,
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      through: Sale,
      foreignKey: 'seller_id',
      as: 'seller',
    });
  }

  return Sale;
}
