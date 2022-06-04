'use strict';

const Solar2015 = require('legoino-device-information').Solar2015;

const parseParameters = require('../parseParameters');

describe('parseParameters', () => {
  it('parseParameters', () => {
    let parameters = parseParameters('00FF00FFFF00FF00');
    expect(parameters).toStrictEqual({
      parameters: {
        A: 255,
        B: 255,
        C: -256,
        D: -256,
      },
      parametersArray: [255, 255, -256, -256],
    });
  });

  it('parseParameters with parameterLabel', () => {
    let parameters = parseParameters('00FF00FFFF00FF00', {
      deviceInformation: Solar2015,
      parameterLabel: true,
    });
    expect(parameters).toStrictEqual({
      parameters: {
        Humidity: -25.6,
        Light: 255,
        Pressure: -256,
        Temperature: 2.55,
      },
      parametersArray: [2.55, 255, -256, -25.6],
    });
  });

  it('parseParameters with parameterInfo', () => {
    let parameters = parseParameters('00FF00FFFF00FF00', {
      deviceInformation: Solar2015,
      parameterInfo: true,
    });
    expect(parameters).toMatchSnapshot();
  });

  it('parseParameters with flagInfo', () => {
    // parameter Z is the last four symbols of the buffer
    let parameters = parseParameters(
      '00FF00FFFF00FF0000FF00FFFF00FF0000FF00FFFF00FF00FFFF00FF00FFFF00FF0000FF00FFFF00FF0000FF00FFFF00FF000011',
      {
        kind: 'OpenBio',
        parameterInfo: true,
        flagInfo: true,
      },
    ).parameters;
    expect(parameters.Z.flags).toStrictEqual({
      stepper: { bit: 0, description: 'Stepper running', value: 1 },
      food: { bit: 1, description: 'Food running', value: 0 },
      pid: { bit: 2, description: 'PID running', value: 0 },
      sedimentation: { bit: 7, description: 'Sedimentation running', value: 0 },
      filling: { bit: 8, description: 'Filling tank', value: 0 },
      emptying: { bit: 9, description: 'Emptying tank', value: 0 },
    });
  });

  it('SimpleSpectro Missing parameters', () => {
    // parameter Z is the last four symbols of the buffer
    let parameters = parseParameters(
      '00FF00FFFF00FF0000FF00FFFF00FF0000FF00FFFF00FF00FFFF00FF00FFFF00FF0000FF00FFFF00FF0000FF00FFFF00FF000011',
      {
        kind: 'SimpleSpectro',
        parameterInfo: true,
        parameterLabel: true,
        flagInfo: false,
      },
    ).parameters;
    for (let key in parameters) {
      expect(parameters[key].variable || parameters[key].name).toBe(key);
    }
  });
});
