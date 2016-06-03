var path = require('path');
var pkg = require('../package.json');
var BinWrapper = require('bin-wrapper');
var BASE = 'https://github.com/matthieudelaro/nut/raw/manualbuild/release/'
var VERSION =  '0.1.2'; //pkg.version;

module.exports = new BinWrapper()
  .src(BASE + 'osx/nut', 'darwin')
  .src(BASE + 'linux/nut',  'linux', 'x64')
  .src(BASE + 'windows/nut.exe', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'nut.exe' : 'nut')
  // .version(VERSION); .version('0.1.2');
