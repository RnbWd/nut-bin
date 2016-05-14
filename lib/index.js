var BinWrapper = require('bin-wrapper');
var path = require('path');
var base = 'https://github.com/matthieudelaro/nut/raw/manualbuild/release/nutOSX'

module.exports = new BinWrapper()
  .src(base, 'darwin')
  .dest(path.join('../release')).use('nutOSX').version('0.1.0');