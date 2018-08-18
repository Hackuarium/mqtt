'use strict';

const DeviceInformation = require('legoino-device-information');

const hexToInt16 = require('../util/hexToInt16');
const numberToLabel = require('../util/numberToLabel');

/**
 * Parse a buffer (String) containg 4 hexadecimal symbol per parameter
 * @param {string} buffer
 * @param {object} [options={}]
 * @param {boolean} [options.parameterLabel=false] Use as property name the label name
 * @param {boolean} [options.parameterInfo=false] Show in the value all the information about the parameter
 * @param {object} [options.deviceInformation=undefined]
 */
module.exports = function parseParameters(buffer, options = {}) {
  let {
    parameterLabel = false,
    parameterInfo = false,
    deviceInformation = DeviceInformation[options.kind]
  } = options;

  let parameters = {};
  let status = { isValid: true };

  let numberOfParameters = buffer.length / 4;
  if (
    deviceInformation &&
    numberOfParameters !== deviceInformation.numberOfParameters &&
    numberOfParameters !== deviceInformation.numberLogParameters
  ) {
    status.isValid = false;
    status.error =
      'The number of parameters is not equal to the one described in the deviceInformation';
  }

  if (!deviceInformation) deviceInformation = { parameters: [] };

  for (var i = 0; i < numberOfParameters; i++) {
    if (!deviceInformation.parameters[i]) {
      deviceInformation.parameters[i] = {
        name: numberToLabel(i),
        label: numberToLabel(i),
        factor: 1
      };
    }

    let valueNumber = hexToInt16(buffer.substring(i * 4, i * 4 + 4));
    if (valueNumber === -32768) continue;

    let label = parameterLabel
      ? deviceInformation.parameters[i].name
      : numberToLabel(i);

    let value;
    if (parameterInfo) {
      value = Object.assign({}, deviceInformation.parameters[i], {
        index: i,
        value: valueNumber,
        realValue: valueNumber / deviceInformation.parameters[i].factor
      });
    } else {
      value = valueNumber;
    }
    parameters[label] = value;
  }
  return parameters;
};
