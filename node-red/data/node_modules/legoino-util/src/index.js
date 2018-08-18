'use strict';

module.exports = {
  parseMultilog: require('./parser/parseMultilog'),
  parseMultilogLine: require('./parser/parseMultilogLine'),
  parseCompactLog: require('./parser/parseCompactLog'),
  deviceIdNumberToString: require('./util/deviceIdNumberToString'),
  deviceIdStringToNumber: require('./util/deviceIdStringToNumber'),
  calculateCheckDigit: require('./util/calculateCheckDigit'),
  createCompactLog: require('./creator/createCompactLog'),
  DevicesInfo: require('legoino-device-information')
};
