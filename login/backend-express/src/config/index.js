require('dotenv').config();

export const config = {
  development: {
    username: 'root',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'study-nodejs-login',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'study-nodejs-login',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
};
