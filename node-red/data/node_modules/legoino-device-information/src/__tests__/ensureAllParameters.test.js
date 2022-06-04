'use strict';

const SimpleSpectro = require('../devices/SimpleSpectro.js');
const ensureAllParameters = require('../ensureAllParameters.js');

test('ensureAllParameters', () => {
  const result = ensureAllParameters(SimpleSpectro);
  for (let i = 0; i < result.parameters.length; i++) {
    const parameter = result.parameters[i];
    // eslint-disable-next-line jest/no-if
    if (parameter === undefined) continue;
    expect(parameter.label).toBe(String.fromCharCode(65 + i));
  }
});
