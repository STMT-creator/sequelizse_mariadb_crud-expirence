// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';
import User from './User.js';
// const config = require(__dirname + '/../config/config.json')[env];
import config from '../config/config.json' assert { type: 'json' };
const env = process.env.NODE_ENV || 'development';
const nowConfig = config[env];

const db = {};

const sequelize = new Sequelize(
  nowConfig.database,
  nowConfig.username,
  nowConfig.password,
  nowConfig,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;

User.init(sequelize)

export default db;
