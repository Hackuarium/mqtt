'use strict';

module.exports = function labelToNumber(code) {
  let value = 0;
  for (let char of code) {
    value *= 26;
    value += char.charCodeAt(0) - 64;
  }
  return value - 1;
};
