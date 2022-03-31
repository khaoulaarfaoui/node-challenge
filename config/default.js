require('dotenv').config();
const path = require('path');

module.exports = {
  db: {
    host:process.env.TYPEORM_HOST,
    type:process.env.TYPEORM_TYPE,
    port:process.env.TYPEORM_PORT,
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password:process.env.TYPEORM_PASSWORD
  },
  debug: {
    stackSize: 4,
  },
  i18next: {
    translationFilePath: path.resolve(__dirname, '..', 'locales/{{lng}}/{{ns}}.json'),
  },
  host: 'localhost:9001',
  https: {
    enabled: false,
  },
  port: process.env.PORT || 9001,
  shutdown: {
    appKill: 1000,
    serverClose: 100,
  },
};
