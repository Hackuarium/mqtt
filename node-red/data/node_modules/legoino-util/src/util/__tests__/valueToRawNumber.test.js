'use strict';

const valueToRawNumber = require('../valueToRawNumber');

test('int16ToHex', () => {
  expect(valueToRawNumber('A', 50.5, 'OpenBio')).toBe(5050);
  expect(valueToRawNumber('C', 5, 'OpenBio')).toBe(5);
  expect(valueToRawNumber('J', 10, 'OpenBio')).toBe(10);
});
