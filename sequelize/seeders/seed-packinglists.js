'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('PackingLists', [
      {
        packing_item: 'Climbing Shoes',
        important_level: 1,
        check: false,
        type_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Chalk Bag',
        important_level: 2,
        check: false,
        type_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Climbing Pants',
        important_level: 3,
        check: false,
        type_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more packing list items as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added packing list items if needed
    await queryInterface.bulkDelete('PackingLists', null, {});
  },
};
