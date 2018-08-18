'use strict';

const debug = require('debug')('legoino:parser:parseMutilog');

const parseMultilogLine = require('./parseMultilogLine');

/**
 * Parse a multilog file
 * @param {*} buffer
 * @param {object} [options={}]
 */

module.exports = function parseMultiLog(buffer, options = {}) {
  var lines = buffer.split(/[\r\n]+/).filter((line) => line);
  var entries = [];
  for (var line of lines) {
    var entry = parseMultilogLine(line, options);
    if (entry) entries.push(entry);
  }
  // Check that all entries come from the same device!!
  if (entries.length > 0) {
    var deviceId = entries[0].deviceId;
    for (var i = 1; i < entries.length; i++) {
      if (entries[i].deviceId !== deviceId) {
        debug(
          `checkdigit is ok but all lines did not come from the same device. There are at least 2 device ids: ${
            entries[0].deviceId
          }, ${entries[i].deviceId}`
        );
        throw new Error('all lines do not have the same id');
      }
    }
  }
  return entries;
};
