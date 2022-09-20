'use strict';

/**
 * @param {import('sequelize').queryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
*/

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdated: 'CASCADE',
      },
      seller_id: {type: Sequelize.INTEGER},
      total_price: {type: Sequelize.FLOAT},
      delivery_address: {type: Sequelize.STRING},
      delivery_number: {type: Sequelize.STRING},
      sale_date: {type: Sequelize.DATE},
      status: {type: Sequelize.STRING}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};