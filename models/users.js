const Sequelize =require('sequelize');
const sequelize = require('../util/database');

// id , name , password, phone, role

const User = Sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

    },
    password: Sequelize.STRING,
})
