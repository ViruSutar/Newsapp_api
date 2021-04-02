'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type:Sequelize.DataTypes.STRING(30),
        allowNull:false,
        unique:true
      },
      email:{
        type:Sequelize.DataTypes.STRING(55),
        allowNull: false,
        unique:true
    },
    password:{
      type: Sequelize.DataTypes.STRING(500),
      field: 'password',
      allowNull: false,
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
    await queryInterface.dropTable('Users');
  }
};