'use strict';

module.exports = {
  parseMultilog: require('./parser/parseMultilog'),
  parseMultilogLine: require('./parser/parseMultilogLine'),
  parseCurrentSettings: require('./parser/parseCurrentSettings'),
  deviceIdNumberToString: require('./util/deviceIdNumberToString'),
  deviceIdStringToNumber: require('./util/deviceIdStringToNumber'),
  calculateCheckDigit: require('./util/calculateCheckDigit'),
  valueToRawNumber: require('./util/valueToRawNumber'),
  createCompactLog: require('./creator/createCompactLog'),
  DevicesInfo: require('legoino-device-information'),
  labelToNumber: require('./util/labelToNumber'),
  numberToLabel: require('./util/numberToLabel'),
};
