var settings = require('./settings');

module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/' + settings.machineTitle,
  localAuth: true,
  sessionSecret: "Your Session Secret goes here",
};

