'use strict';

module.exports = function int16ToHex(value = null) {
  if (value > 32767 || value < -32767 || value === null) value = -32768;
  if (value < 0) {
    value += 65536;
  }
  return Number(value)
    .toString(16)
    .padStart(4, '0')
    .toUpperCase();
};
