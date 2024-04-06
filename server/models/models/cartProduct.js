const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../databas/database');

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
      model: 'cart',
      key: 'id',
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'product_id',
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  sequelize,
  modelName: 'CartProduct',
  tableName: 'cart_products',
  timestamps: false,
});

module.exports = CartProduct;
