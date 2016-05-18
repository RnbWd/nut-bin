var path = require('path');
var pkg = require('../package.json');
var BinWrapper = require('bin-wrapper');
var BASE = 'https://github.com/matthieudelaro/nut/raw/manualbuild/release/'
var VERSION = pkg.version; //0.1.2

module.exports = new BinWrapper()
  .src(BASE + 'osx/nut', 'darwin')
  .src(BASE + 'linux/net',  'linux', 'x64')
  .src(BASE + 'windows/nut', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use('nut')
  .version(VERSION); //.version('0.1.2');
