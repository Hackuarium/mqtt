'use strict';

module.exports = function deviceIdStringToNumber(idString) {
  if (idString === undefined) return undefined;

  if (idString.length === 2) {
    return idString.charCodeAt(0) * 256 + idString.charCodeAt(1);
  } else {
    throw new Error('Id does not have the expected 2 char format');
  }
  // return idString;
};
