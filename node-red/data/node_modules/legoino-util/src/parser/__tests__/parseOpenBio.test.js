'use strict';

const parseMultilog = require('../parseMultilog');

test('parse OpenBio no label', () => {
  let buffer =
    '0000CAD05ECBCE73800009EF00C80BB8F02400980004F8D9BCA4FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000A000000000000243242';
  // we want to parse the multilog into a json that would be stored in a db
  let result = parseMultilog(buffer, {
    kind: 'OpenBio',
    parameterLabel: false,
  });

  expect(result).toStrictEqual([
    {
      deviceId: 9266,
      epoch: 1590414963000,
      eventId: 0,
      eventValue: 0,
      id: 51920,
      parameters: {
        B: 25.43,
        C: 200,
        D: 30,
        E: -4060,
        F: 152,
        G: 4,
        H: -1831,
        I: -17244,
        J: -1,
        K: -1,
        L: -1,
        M: -1,
        N: -1,
        O: -1,
        P: -1,
        Q: -1,
        R: -1,
        S: -1,
        T: -1,
        U: -1,
        V: -1,
        W: -1,
        X: -1,
        Y: 10,
        Z: 0,
      },
    },
  ]);
});

test('parse OpenBio with labels', () => {
  let buffer =
    '0000CAD05ECBCE73800009EF00C80BB8F02400980004F8D9BCA4FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000A000000000000243242';
  // we want to parse the multilog into a json that would be stored in a db
  let result = parseMultilog(buffer, {
    kind: 'OpenBio',
    parameterLabel: true,
  });

  expect(result).toStrictEqual([
    {
      deviceId: 9266,
      epoch: 1590414963000,
      eventId: 0,
      eventValue: 0,
      id: 51920,
      parameters: {
        error: 10,
        grWeight: 152,
        maxWeight: -17244,
        minWeight: -1831,
        pcbTemp: 25.43,
        pidTemp: 200,
        status: 0,
        targetTemp: 30,
        weight: -4060,
        waitSinceLast: 4,
      },
    },
  ]);
});
