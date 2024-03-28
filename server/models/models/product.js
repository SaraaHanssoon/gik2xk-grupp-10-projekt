const { Model, DataTypes } = require('sequelize');
const sequelize = require('C:\Users\Admin\tshirtshop\server\database.js'); 

class Product extends Model {}

Product.init({

  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize, // Din Sequelize-instans
  modelName: 'Product',
  tableName: 'product', // Namnet på tabellen i databasen
  timestamps: false, // Sätt till true om du har createdAt och updatedAt kolumner
});

module.exports = Product;
