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
     queryInterface.bulkInsert('Articles', [{
        title: 'This is title',
        description:'This is description',
        UserId:1,
        "updatedAt":  new Date(),
        "createdAt":  new Date()
       }], 
       [{
        title: 'This is for testing',
        description:'This is description for testing',
        UserId:1,
        "updatedAt":  new Date(),
        "createdAt":  new Date()
       }]
       ,{});
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
