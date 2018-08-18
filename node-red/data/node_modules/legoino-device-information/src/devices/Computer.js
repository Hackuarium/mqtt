'use strict';

module.exports = {
  name: 'Computer mornitoring',
  kind: 'Computer',
  numberParameters: 16,
  numberLogParameters: 16,
  description: '',
  url: '',
  parameters: [
    {
      label: 'A',
      name: 'cpuTemperature',
      description: '',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'B',
      name: 'memFree',
      description: 'Free memory in percent',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'C',
      name: 'swapFree',
      description: 'Free swap in percent',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'D',
      name: 'fsRead',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false
    },

    {
      label: 'E',
      name: 'fsWrite',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false
    },

    {
      label: 'F',
      name: 'networkRead',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false
    },

    {
      label: 'G',
      name: 'networkWrite',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false
    },

    {
      label: 'H',
      name: 'load',
      description: 'Total load',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'I',
      name: 'loadUser',
      description: 'Load from user',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'J',
      name: 'loadSystem',
      description: 'Load from system',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'K',
      name: 'loadNice',
      description: 'Load for Nice',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'L',
      name: 'loadIdle',
      description: 'Idle percent of time',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'M',
      name: 'loadIrq',
      description: 'Load due to IRQ',
      factor: 1,
      unit: '%',
      writable: false
    },

    {
      label: 'N',
      name: 'fsMinUsed',
      description: 'Minimal percent spaced used in a filesystem',
      factor: 1,
      unit: '%',
      writable: false
    },
    {
      label: 'O',
      name: 'fsMaxUsed',
      description: 'Maximal percent spaced used in a filesystem',
      factor: 1,
      unit: '%',
      writable: false
    }
  ]
};
