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
      type: DataTypes.INTEGER
    },
    seller_id: {
      type: DataTypes.INTEGER
    },
    total_price: {type: DataTypes.FLOAT},
    delivery_address: {type: DataTypes.STRING},
    delivery_number: {type: DataTypes.STRING},
    sale_date: {type: DataTypes.DATE},
    status: {type: DataTypes.STRING}
  }, {
    tableName: 'sale',
    timestamp: false
  })
  
  Sale.associate = (models) => {
    models.User.belongsToMany(models.User, {
      through: Sale,
      foreignKey: 'user_id'
    });
    models.User.belongsToMany(models.User, {
      through: Sale,
      foreignKey: 'seller_id',
    });
  };

  return Sale;
}
