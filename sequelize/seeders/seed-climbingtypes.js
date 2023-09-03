// seed-climbing-types.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ClimbingTypes', [
      {
        type_name: 'Sport Climbing',
        description: 'Sport climbing involves climbing routes with pre-placed protection, such as bolts, for safety.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_name: 'Bouldering',
        description: 'Bouldering is a form of climbing without ropes on short and challenging routes, usually close to the ground.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_name: 'Autobelay',
        description: 'Autobelay climbing uses an automatic belay device for solo climbing with a self-retracting rope.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_name: 'Top Rope',
        description: 'Top rope climbing involves a rope anchored at the top of a route, providing safety for climbers.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_name: 'Traditional Climbing',
        description: 'Traditional climbing, or "trad" climbing, involves placing and removing protection gear while climbing.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ClimbingTypes', null, {});
  },
};
