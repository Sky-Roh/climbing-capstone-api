'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GoalSettings', [
      {
        goal: 'Climb a 5.10 route at the local gym',
        achievement: 'Completed',
        check: true,
        description: 'Train regularly and build strength to achieve this goal.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Lead climb an outdoor route',
        achievement: 'In Progress',
        check: false,
        description: 'Improve lead climbing skills and gain outdoor experience.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Climb a multi-pitch route',
        achievement: 'Completed',
        check: true,
        description: 'Learn multi-pitch techniques and teamwork.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Master crack climbing techniques',
        achievement: 'In Progress',
        check: false,
        description: 'Practice crack climbing skills regularly.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Climb a 14er mountain',
        achievement: 'Completed',
        check: true,
        description: 'Plan a trip to a 14er mountain and prepare for high-altitude climbing.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Boulder a V5 problem',
        achievement: 'In Progress',
        check: false,
        description: 'Focus on strength and technique to boulder at a higher grade.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Complete a climbing marathon',
        achievement: 'Completed',
        check: true,
        description: 'Challenge endurance and mental toughness.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Climb a famous rock face',
        achievement: 'In Progress',
        check: false,
        description: 'Plan a trip to a famous climbing location and accomplish a classic route.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Lead climb a 5.11 route',
        achievement: 'Completed',
        check: true,
        description: 'Train hard and gain outdoor lead climbing experience.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goal: 'Climb ice in a winter expedition',
        achievement: 'Waiting',
        check: false,
        description: 'Prepare for extreme cold conditions and ice climbing techniques.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GoalSettings', null, {});
  },
};
