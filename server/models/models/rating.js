const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../databas/database');

class Rating extends Model {}

Rating.init({
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
      model: 'product', 
      key: 'product_id',
    }
  },
}, {
  sequelize,
  modelName: 'Rating',
  tableName: 'ratings',
  timestamps: false,
});

module.exports = Rating;
