'use strict';

module.exports = function calculateCheckDigit(hexString) {
  var checkDigit = 0;
  for (var i = 0; i < hexString.length; i = i + 2) {
    checkDigit ^= parseInt(`${hexString[i]}${hexString[i + 1]}`, 16);
  }
  return checkDigit;
};
