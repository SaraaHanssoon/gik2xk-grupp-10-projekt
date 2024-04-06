const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../databas/database');

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
  sequelize,
  modelName: 'Product',
  tableName: 'product',
  timestamps: false,
});

module.exports = Product;
