'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('allcodes', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key:{
        type: Sequelize.STRING
      },
      statusId: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      type:{
        type: Sequelize.STRING
      },
      valueVi: {
        type: Sequelize.STRING
      },
      valueEn: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      timeType: {
        allowNull: false,
        type: Sequelize.STRING
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
 down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('allcodes');
  }
};