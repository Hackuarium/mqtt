'use strict';

const parseCurrentSettings = require('../parseCurrentSettings');

describe('parseCurrentSettings', () => {
  it('parseCurrentSettings of OpenBio', () => {
    // in the bioreactor, these settings are obtained with command `uc`
    let currentSettings =
      '5ECCEF988000097200C80BB8F03E00960004F8D9BCA4FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000A000000140005FFFFFFFFFFFF001E001EC6C3F8DBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000724322C';

    let result = parseCurrentSettings(currentSettings, {});

    expect(result).toMatchSnapshot();
  });

  it('parseCurrentSettings of Computer', () => {
    // in the bioreactor, these settings are obtained with command `uc`
    let currentSettings =
      '629CB4D200000001003439DD13A8000000000013000C0007000000510000800080008000434139';

    let result = parseCurrentSettings(currentSettings, {
      parameterLabel: true,
      parameterInfo: true,
      parametersArray: true,
      flatten: true,
      kind: 'Computer',
    });
    expect(result).toMatchSnapshot();
  });

  it('invalid characters filter', () => {
    let buffer = '000100000001000200030004414105 \n';

    let result = parseCurrentSettings(buffer, {});

    expect(result).toStrictEqual({
      epoch: 65536000,
      parameters: { A: 1, B: 2, C: 3, D: 4 },
      deviceId: 16705,
      deviceCode: 'AA',
    });
  });

  it('lowercase hex characters', () => {
    let buffer =
      '5eccef988000097200C80BB8F03E00960004F8D9BCA4FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000A000000140005FFFFFFFFFFFF001E001EC6C3F8DBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000724322C';

    let result = parseCurrentSettings(buffer, {});

    expect(result).toMatchSnapshot();
  });

  it('flatten option', () => {
    let buffer = '000100000001000200030004414105';

    let result = parseCurrentSettings(buffer, { flatten: true });

    expect(result).toStrictEqual({
      epoch: 65536000,
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      deviceId: 16705,
      deviceCode: 'AA',
    });
  });

  it('parametersArray option', () => {
    let buffer = '000100000001000200030004414105';

    let result = parseCurrentSettings(buffer, { parametersArray: true });

    expect(result).toStrictEqual({
      epoch: 65536000,
      parameters: { A: 1, B: 2, C: 3, D: 4 },
      parametersArray: [1, 2, 3, 4],
      deviceId: 16705,
      deviceCode: 'AA',
    });
  });

  it('parameterLabel and kind options', () => {
    let buffer =
      '5ECDFB908000097900C80BB8F04200960004F8D9BCA4FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000A000000140005FFFFFFFFFFFF001E001EC6C3F8DBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0007243246';

    let result = parseCurrentSettings(buffer, {
      parameterLabel: true,
      kind: 'OpenBio',
    });

    expect(result).toStrictEqual({
      deviceCode: '$2',
      deviceId: 9266,
      epoch: 1590557584000,
      parameters: {
        enable: 7,
        error: 10,
        filledTime: 30,
        grWeight: 150,
        maxWeight: -17244,
        minWeight: -1831,
        pcbTemp: 24.25,
        pidTemp: 200,
        sedTime: 30,
        status: 0,
        stepperOffDelay: -1,
        stepperOnDelay: 5,
        stepperSpeed: 20,
        targetTemp: 30,
        weight: -4030,
        weightFactor: -14653,
        weightOffset: -1829,
        waitSinceLast: 4,
      },
    });
  });
});
