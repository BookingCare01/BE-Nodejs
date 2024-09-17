require('dotenv').config(); // Load biến môi trường từ .env
const { Sequelize } = require('sequelize');

// Lấy URL kết nối từ biến môi trường
const databaseUrl = process.env.DATABASE_URL;

// Tạo instance Sequelize từ URL kết nối
const sequelize = new Sequelize(databaseUrl, {
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDB;
