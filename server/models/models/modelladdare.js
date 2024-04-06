'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const filePath = path.join(__dirname, file);
    const modelDefiner = require(filePath);
    try {
      // Attempt to instantiate as a class
      const modelInstance = new modelDefiner(sequelize, Sequelize.DataTypes);
      db[modelInstance.name] = modelInstance;
    } catch (error) {
      // Handle cases where export is not a class
      if (error.message.match(/class constructor .* cannot be invoked without 'new'/)) {
        console.error(`Error loading model from file ${file}: ${error.message}`);
      } else {
        // Proceed with original logic if the error is not related to class instantiation
        const model = modelDefiner(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      }
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
