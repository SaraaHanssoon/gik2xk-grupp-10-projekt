const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../databas/database');

class Cart extends Model {}

Cart.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user', 
      key: 'id', 
    }
  },
}, {
  sequelize, // Passa din Sequelize-instans
  modelName: 'Cart', // Namnet på modellen
  tableName: 'cart', // Namnet på tabellen i databasen
  timestamps: false, // Sätt till true om du har createdAt och updatedAt kolumner och vill att Sequelize ska hantera dem automatiskt
});

module.exports = Cart;
