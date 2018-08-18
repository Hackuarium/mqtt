'use strict';

const labelToNumber = require('../labelToNumber');

test('labelToNumber', () => {
  expect(labelToNumber('A')).toBe(0);
  expect(labelToNumber('Z')).toBe(25);
  expect(labelToNumber('AA')).toBe(26);
});
