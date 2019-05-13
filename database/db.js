const Sequelize = require('sequelize');
const { DATABASE_URL } = require('../secret.js');

//Database connection
const db = new Sequelize(DATABASE_URL);
db.sync({logging: false}).then(() => { console.log(`Database & tables created!`) });

module.exports.db = db;
module.exports.Sequelize = Sequelize;
