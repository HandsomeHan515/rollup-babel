'use strict';

require('core-js/modules/es.array.concat');
require('core-js/modules/es.array.filter');
require('core-js/modules/es.array.includes');
require('core-js/modules/es.object.assign');

var a = [1, 2, 3, 4];
console.log(a.includes(function (e) {
  return e === 2;
}));
var b = arr.filter(function (e) {
  return e > 2;
});
console.log(b);
var c = [].concat(a);
console.log(c);
var obj = {
  d: 1,
  e: 2
};
var d = obj.d;
console.log(d);
var obj2 = Object.assign({}, obj, {
  f: 3
});
console.log(obj2);
