var Xray = require('x-ray');
var xray = Xray();

xray('http://google.com', 'a', [{
  a: '',
  href: '@href',
  css: '@class'
}]
).write('result.json');
