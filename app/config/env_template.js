'use strict';

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyB1zrKUHIcK-pUAnDZdk-4JKNFc2Lr1bec"',
  AUTH_DOMAIN: '"budzet-dev.firebaseapp.com"',
  DATABASE_URL: '"https://budzet-dev.firebaseio.com"',
  PROJECT_ID: '"budzet-dev"',
  STORAGE_BUCKET: '"budzet-dev.appspot.com"',
  MESSAGING_SENDER_ID: '"227927254747"'
});
