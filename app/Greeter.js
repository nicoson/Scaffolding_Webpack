// Greeter.js
var config = require('./config.json');

module.exports = function() {
  let greet = document.createElement('div');
  greet.textContent = config.greetText;

  let s = new Set([1,2,3,4,5,6,4,3,2,1]);
  console.log(...s);
  return greet;
};