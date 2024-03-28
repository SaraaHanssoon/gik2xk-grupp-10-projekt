const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'C:\\Users\\Admin\\tshirtshop\\server\\tshirtDataBase.db' // Notera korrigeringen för Windows-sökvägar
});

module.exports = sequelize;
