'use strict';

const calculateCheckDigit = require('./calculateCheckDigit');

module.exports = function checkCheckDigit(line) {
  if (calculateCheckDigit(line) === 0) return true;
  return false;
};
