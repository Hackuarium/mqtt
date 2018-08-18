'use strict';

module.exports = function deviceIdNumberToString(idNumber) {
  return (
    String.fromCharCode((idNumber / 256) | 0) +
    String.fromCharCode(idNumber % 256)
  );
};
