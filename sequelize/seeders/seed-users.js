'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Alice',
        password: 'password1',
        email: 'alice@example.com',
        phone: '123-456-7890',
        description: 'User 1 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Bob',
        password: 'password2',
        email: 'bob@example.com',
        phone: '987-654-3210',
        description: 'User 2 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Charlie',
        password: 'password3',
        email: 'charlie@example.com',
        phone: '555-555-5555',
        description: 'User 3 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'David',
        password: 'password4',
        email: 'david@example.com',
        phone: '111-222-3333',
        description: 'User 4 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};