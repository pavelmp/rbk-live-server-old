const { db, Sequelize } = require('./db');

// TODO: Add user_id to Place
const Place = db.define('place', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    location: {type: Sequelize.STRING, required: true},
    distance: {type: Sequelize.INTEGER, required: false}
});

const User = db.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: Sequelize.STRING, required: true, unique: true},
    password: {type: Sequelize.STRING, required: true}
});

//To add userId to Place, either of these commands will work:
Place.belongsTo(User); // This will add userId to Place
// User.hasMany(Place); // This will also add userId to Place


module.exports.Place = Place;
module.exports.User = User;