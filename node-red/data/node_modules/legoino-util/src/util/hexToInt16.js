'use strict';

module.exports = function hexToInt16(hexa) {
  let value = parseInt(`${hexa}`, 16);
  if (value > 32767) {
    return (65536 - value) * -1;
  }
  return value;
};
