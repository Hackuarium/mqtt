'use strict';

const int16ToHex = require('../int16ToHex');

test('int16ToHex', () => {
  expect(int16ToHex(0)).toBe('0000');
  expect(int16ToHex(255)).toBe('00FF');
  expect(int16ToHex(32767)).toBe('7FFF');
  expect(int16ToHex(-1)).toBe('FFFF');
  expect(int16ToHex(-32768)).toBe('8000');
});
