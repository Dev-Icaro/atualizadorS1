'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('configs', 'dataExePrecaTop', {
      type: Sequelize.DATE 
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('configs', 'dataExePrecaTop');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
