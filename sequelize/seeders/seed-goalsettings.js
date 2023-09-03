// seed-goal-settings.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GoalSettings', [
      {
        goal: 'Climb a 5.11 route',
        achievement: 'Completed',
        check: true,
        description: 'This was a challenging climb that required a lot of training and practice.',
        user_id: 1, // Replace with the actual user ID for this goal
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Complete a bouldering competition',
        achievement: 'Completed',
        check: true,
        description: 'Participated in the local bouldering competition and achieved a top-three finish.',
        user_id: 1, // Replace with the actual user ID for this goal
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Lead climb on a multi-pitch route',
        achievement: 'In progress',
        check: false,
        description: 'Planned multi-pitch climbing for the first time.',
        user_id: 1, // Replace with the actual user ID for this goal
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Improve overall climbing endurance',
        achievement: 'Wating',
        check: false,
        description: 'Not started yet.',
        user_id: 1, // Replace with the actual user ID for this goal
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more goal data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GoalSettings', null, {});
  },
};
