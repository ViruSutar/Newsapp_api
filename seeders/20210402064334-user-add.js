'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Users',[{
    "username":"jones",
    "email":"jones@gmail.com",
    "password":"1234",
    "updatedAt": new Date(),
    "createdAt":  new Date()
   }],
   [{
    "username":"virus",
    "email":"virus@gmail.com",
    "password":"1234",
    "updatedAt": new Date(),
    "createdAt":  new Date()
   }],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
