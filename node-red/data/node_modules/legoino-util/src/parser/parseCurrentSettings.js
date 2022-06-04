'use strict';

const debug = require('debug')('legoino:parser:parseCurrentSettings');

const calculateCheckDigit = require('../util/calculateCheckDigit');
const checkCheckDigit = require('../util/checkCheckDigit');
const deviceIdNumberToString = require('../util/deviceIdNumberToString');
const hexToInt16 = require('../util/hexToInt16');

const parseParameters = require('./parseParameters');

/**
 * Parse a current settings log.
 * @param {string} line
 * @param {object} [options={}]
 * @param {boolean} [options.flatten=false] The parsed log will have all properties at the same level (no sub-object for the parameters)
 * @param {boolean} [options.parametersArray=false] Add an array with all the parameters to the result
 * @param {boolean} [options.parameterLabel=false] Use the variable property of device info as property name
 * @param {boolean} [options.parameterInfo=false] Show all the information about the parameter in the value
 * @param {string} [options.kind=undefined] Specify a device type from those that exist in `legoino-device-information`
 * @param {object} [options.deviceInformation=undefined] Pass information for a device that does not exist in `legoino-device-information`. To use if `options.kind` is undefined.
 * @return {object} The parsed settings.
 *
 * Warning: parameters that are undefined are not returned!
 */
module.exports = function parseCurrentSettings(line, options) {
  let { flatten = false, parametersArray = false } = options;

  // keep only valid characters
  line = line.replace(/[^0-9A-F]/gi, '');

  let entry = {};
  let parseResult;
  if (checkCheckDigit(line)) {
    entry.epoch = parseInt(line.substring(0, 8), 16) * 1000;
    parseResult = parseParameters(line.substring(8, line.length - 6), options);
    entry.deviceId = hexToInt16(
      line.substring(line.length - 6, line.length - 2),
    );
    entry.deviceCode = deviceIdNumberToString(entry.deviceId);
  } else {
    debug('Check digit error', line);
    throw new Error(
      `Check digit error. Should be: ${calculateCheckDigit(line).toString(16)}`,
    );
  }

  if (flatten) {
    Object.assign(entry, parseResult.parameters);
  } else {
    entry.parameters = parseResult.parameters;
  }
  if (parametersArray) {
    entry.parametersArray = parseResult.parametersArray;
  }
  return entry;
};
