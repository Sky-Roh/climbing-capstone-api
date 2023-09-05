'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('PackingLists', [
      {
        packing_item: 'Climbing Shoes',
        important_level: 1,
        check: false,
        climbingtype_name: 'Indoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Chalk Bag',
        important_level: 2,
        check: false,
        climbingtype_name: 'Indoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Climbing Pants',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: '2 Crash Pads',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Climbing Harness',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Top Rope',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Quick Draws',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Sport Climbing',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'GriGri',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Sport Climbing',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added packing list items if needed
    await queryInterface.bulkDelete('PackingLists', null, {});
  },
};
