var BinWrapper = require('bin-wrapper');
var path = require('path');
var BASE = 'https://github.com/matthieudelaro/nut/raw/manualbuild/release/'

module.exports = new BinWrapper()
  .src(BASE + 'nutOSX', 'darwin')
  .src(BASE + 'nutLinux',  'linux', 'x64')
  // .src(BASE + 'Windows', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use((process.platform === 'linux' ? 'nutLinux' : 'nutOSX'))
  .version('0.1.0');