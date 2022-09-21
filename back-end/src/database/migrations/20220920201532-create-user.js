'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
    })
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  }
}
