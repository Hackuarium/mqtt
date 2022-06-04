'use strict';

const ensureAllParameters = require('./ensureAllParameters.js');

let devices = {
  OpenBio: ensureAllParameters(require('./devices/OpenBio')),
  OpenBio6: ensureAllParameters(require('./devices/OpenBio6')),
  OpenSpectro: ensureAllParameters(require('./devices/OpenSpectro')),
  SimpleSpectro: ensureAllParameters(require('./devices/SimpleSpectro')),
  Solar2015: ensureAllParameters(require('./devices/Solar2015')),
  Beemos: ensureAllParameters(require('./devices/Beemos')),
  Computer: ensureAllParameters(require('./devices/Computer')),
  fromDeviceID,
};

/**
 * Return a device information from the deviceID
 * @param {string|number} id
 * @returns
 */
function fromDeviceID(id) {
  if (typeof id === 'number') {
    id = String.fromCharCode((id / 256) >> 0) + String.fromCharCode(id % 256);
  }
  if (typeof id !== 'string') {
    throw Error('Device ID not a string or number');
  }
  if (id.length !== 2) {
    throw Error(
      `Device ID should be 2 character long and found: ${id.ldength}`,
    );
  }
  const firstCharacter = id.substring(0, 1);
  for (let key in devices) {
    if (devices[key].id === firstCharacter) {
      return ensureAllParameters(devices[key]);
    }
  }
  return undefined;
}

module.exports = devices;
