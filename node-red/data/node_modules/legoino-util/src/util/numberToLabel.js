'use strict';

module.exports = function numberToLabel(value) {
  if (value < 26) {
    return String.fromCharCode(65 + value);
  } else {
    return String.fromCharCode(Math.floor(value / 26) + 64, 65 + value - 26);
  }
};
