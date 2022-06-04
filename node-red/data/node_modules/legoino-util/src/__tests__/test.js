'use strict';

const legoinoUtil = require('..');

describe('legoino-util test', () => {
  it('Something to test', () => {
    expect(legoinoUtil).toHaveProperty('parseMultilog');
    expect(legoinoUtil).toHaveProperty('parseCurrentSettings');
    expect(legoinoUtil).toHaveProperty('deviceIdNumberToString');
    expect(legoinoUtil).toHaveProperty('deviceIdStringToNumber');
    expect(legoinoUtil).toHaveProperty('calculateCheckDigit');
  });
});
