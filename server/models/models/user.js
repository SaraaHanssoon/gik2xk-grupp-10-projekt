const { Model, DataTypes } = require('sequelize');
const sequelize = require('C:\Users\Admin\tshirtshop\server\database.js'); 

class User extends Model {}

User.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize, // Din Sequelize-instans
  modelName: 'User',
  tableName: 'user', // Namnet på tabellen i databasen
  timestamps: false, // Sätt till true om du har createdAt och updatedAt kolumner
});

module.exports = User;
