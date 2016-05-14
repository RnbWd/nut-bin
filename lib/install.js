'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['--version'], function (err) {
  if (err) {
    log.error(err.message);
    log.error('vault binary test failed');
    return;
  }
  log.success('vault binary test passed successfully');
});