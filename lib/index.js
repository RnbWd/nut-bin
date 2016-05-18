var BinWrapper = require('bin-wrapper');
var path = require('path');
var BASE = 'https://github.com/matthieudelaro/nut/raw/manualbuild/release/'

module.exports = new BinWrapper()
  .src(BASE + 'osx/nut', 'darwin')
  .src(BASE + 'linux/net',  'linux', 'x64')
  .src(BASE + 'windows/nut', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use('nut')
  .version('0.1.2');