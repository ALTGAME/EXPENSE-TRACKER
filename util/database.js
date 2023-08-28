const Sequelize = require('sequelize')

const sequelize = new Sequelize('Expense', 'root', 'joker@123',{
    dialect: 'mysql',
    host: 'localhost'

})

module.exports = sequelize;

