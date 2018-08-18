'use strict';

const numberToLabel = require('../numberToLabel');

test('numberToLabel', () => {
  expect(numberToLabel(0)).toBe('A');
  expect(numberToLabel(25)).toBe('Z');
  expect(numberToLabel(26)).toBe('AA');
});
