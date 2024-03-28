const { Model, DataTypes } = require('sequelize');
const sequelize = require('C:\Users\Admin\tshirtshop\server\database.js'); 

class CartProduct extends Model {}

CartProduct.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cart', // 'cart' bör vara namnet på din Cart-modell/tabell
      key: 'id',
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product', // 'product' bör vara namnet på din Product-modell/tabell
      key: 'product_id', // 'product_id' bör vara nyckeln i din Product-modell
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Standardvärdet om inget annat anges
  },
}, {
  sequelize, // Din Sequelize-instans
  modelName: 'CartProduct',
  tableName: 'cart_products', // Namnet på tabellen i databasen
  timestamps: false, // Sätt till true om du har createdAt och updatedAt kolumner
});

module.exports = CartProduct;
