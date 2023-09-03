// seed-climbing-sessions.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ClimbingSessions', [
      {
        session_date: '2023-08-20',
        location: 'True North Climbing',
        grade: '5.10b',
        duration: '2H',
        description: 'Fun indoor climbing session with friends.',
        type_id: 1, 
        user_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session_date: '2023-08-21',
        location: 'Outdoor Climbing Area B',
        grade: 'V3',
        duration: '3 hours',
        description: 'Bouldering session in the beautiful outdoors.',
        type_id: 2, 
        user_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session_date: '2023-08-22',
        location: 'Rock Oasis',
        grade: '5.11a',
        duration: '2H 30M',
        description: 'Challenging lead climbing session indoors.',
        type_id: 1, 
        user_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session_date: '2023-08-23 ',
        location: 'Mount Nemo',
        grade: '5.9',
        duration: '2H',
        description: 'Top rope climbing in the great outdoors.',
        type_id: 4, 
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ClimbingSessions', null, {});
  },
};
