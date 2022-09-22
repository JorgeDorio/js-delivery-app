'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    tableName: 'users',
    timestamps: false
  });

  // User.associate = (models) => {
  //   User.hasMany(models.Sale, {
  //     foreignKey: 'id',
  //     as: 'sales',
  //   });
  // }

  return User;
}
