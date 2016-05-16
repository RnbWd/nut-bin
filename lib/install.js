'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['--version'], function (err) {
  if (err) {
    log.error(err.message);
    log.error('nut binary test failed');
    return;
  }
  log.success('nut binary test passed successfully');
});