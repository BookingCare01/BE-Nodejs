'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456',
        firstName: 'HoidanIT',
        lastName: 'Eric',
        address: 'VN',
        gender: 1,
        roleId: 'ROLE',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Nguyen',
        lastName: 'Huong',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),}
    ]);
  },
  // down: (queryInterface, Sequelize) => {
  //   return queryInterface.bulkDelete('User', null, {});
  // },
};