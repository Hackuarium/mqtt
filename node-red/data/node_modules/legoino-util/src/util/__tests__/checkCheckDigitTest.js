'use strict';

const checkCheckDigit = require('../checkCheckDigit');

test('checkCheckDigit', () => {
  expect(checkCheckDigit('AAAAAAAA')).toBe(true);
  expect(checkCheckDigit('AAAAAA')).toBe(false);
  expect(
    checkCheckDigit('0000FFFF00007FFF000100020003000400050006AAAA0087')
  ).toBe(true);
});
