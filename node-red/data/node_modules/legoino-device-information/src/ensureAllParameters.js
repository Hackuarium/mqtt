'use strict';

/**
 * add possibly missing parameters in the array
 * @param {*} device
 * @returns
 */
function ensureAllParameters(device) {
  const existingParameters = device.parameters;
  let currentPosition = 0;
  const parameters = [];
  for (let parameter of existingParameters) {
    if (!parameter.label) {
      throw new Error(`missing label for ${JSON.stringify(parameter)}`);
    }
    const labelPosition = labelToNumber(parameter.label);
    if (labelPosition < currentPosition) {
      throw new Error(
        `expectedPosition > currentPosition for ${JSON.stringify(parameter)}`,
      );
    }
    while (labelPosition > currentPosition) {
      parameters.push(undefined);
      currentPosition++;
    }
    parameters.push(parameter);
    currentPosition++;
  }
  device.parameters = parameters;
  return device;
}

function labelToNumber(code) {
  let value = 0;
  for (let char of code) {
    value *= 26;
    value += char.charCodeAt(0) - 64;
  }
  return value - 1;
}

module.exports = ensureAllParameters;
