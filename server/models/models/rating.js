const { Model, DataTypes } = require('sequelize');
const sequelize = require('C:\Users\Admin\tshirtshop\server\database.js');

class Rating extends Model {}

Rating.init({
  // Attributdefinitioner
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product', // 'product' bör vara namnet på din Product-modell/tabell
      key: 'product_id', // 'product_id' är nyckeln i Product-modellen som detta fält refererar till
    }
  },
}, {
  sequelize, // Din Sequelize-instans
  modelName: 'Rating',
  tableName: 'ratings', // Namnet på tabellen i databasen
  timestamps: false, // Sätt till true om du har createdAt och updatedAt kolumner
});

module.exports = Rating;
