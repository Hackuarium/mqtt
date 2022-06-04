'use strict';

module.exports = function calculateCheckDigit(hexString) {
  let checkDigit = 0;
  for (let i = 0; i < hexString.length; i = i + 2) {
    checkDigit ^= parseInt(`${hexString[i]}${hexString[i + 1]}`, 16);
  }
  // console.log(checkDigit.toString(16));
  return checkDigit;
};
