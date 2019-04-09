var mysql = require('mysql');
var config = require('../../config/config.js');
var path = require('path')
const Sequelize = require('sequelize');
var fs = require('fs');
var db = {};

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('connection succesfully');
})
.catch((err) => {
    console.log('mm fallo');
})

fs.readdirSync(__dirname)
    .filter(file => { return ( file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    console.log(file);
    db[model.name] = model;
});


Object.keys(db).forEach(model => {
    if(db[model].associate) {
        db[model].associate(db);
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
