'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_details', {
      
      id_order_detail: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order: {
        type: Sequelize.INTEGER
      },
      id_product: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      unit_value: {
        type: Sequelize.DECIMAL
      },
      percentage_discount: {
        type: Sequelize.DECIMAL
      },
      total_value: {
        type: Sequelize.DECIMAL
      },
      id_product_size: {
        type: Sequelize.INTEGER
      },
      id_product_color: {
        type: Sequelize.INTEGER
      },
      id_product_material: {
        type: Sequelize.INTEGER
      },
      id_product_colection: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_details');
  }
};