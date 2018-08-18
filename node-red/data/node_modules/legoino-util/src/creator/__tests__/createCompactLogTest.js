'use strict';

const createCompactLog = require('../createCompactLog');

test('createCompactLog', () => {
  expect(
    createCompactLog(
      {
        id: 65535,
        epoch: 32767,
        parameters: {
          A: 1,
          B: 2,
          C: 3,
          D: 4
        },
        eventId: 5,
        eventValue: 6,
        deviceId: 0xaaaa - 65536
      },
      4
    )
  ).toBe('0000FFFF00007FFF000100020003000400050006AAAA87');
});
