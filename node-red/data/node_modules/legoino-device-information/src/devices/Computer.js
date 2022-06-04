'use strict';

module.exports = {
  name: 'Computer monitoring',
  kind: 'Computer',
  numberParameters: 16,
  numberLogParameters: 16,
  description: '',
  id: 'C',
  url: '',
  parameters: [
    {
      label: 'A',
      variable: 'cpuTemperature',
      name: 'CPU Temperature',
      description: '',
      factor: 1,
      unit: '°C',
      writable: false,
    },

    {
      label: 'B',
      variable: 'memFree',
      name: 'Free memory',
      description: 'Free memory in percent',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'C',
      variable: 'swapFree',
      name: 'Free swap',
      description: 'Free swap in percent',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'D',
      variable: 'fsRead',
      name: 'FS Read',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false,
    },

    {
      label: 'E',
      variable: 'fsWrite',
      name: 'FS Write',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false,
    },

    {
      label: 'F',
      variable: 'networkRead',
      name: 'Network Read',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false,
    },

    {
      label: 'G',
      variable: 'networkWrite',
      name: 'Network Write',
      description: 'File system read in kb',
      factor: 1,
      unit: 'kb',
      writable: false,
    },

    {
      label: 'H',
      variable: 'load',
      name: 'Load',
      description: 'Total load',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'I',
      variable: 'userLoad',
      name: 'User load',
      description: 'Load from user',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'J',
      variable: 'systemLoad',
      name: 'System load',
      description: 'Load from system',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'K',
      variable: 'niceLoad',
      name: 'Nice load',
      description: 'Load for Nice',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'L',
      variable: 'idleLoad',
      name: 'Idle load',
      description: 'Idle percent of time',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'M',
      variable: 'irqLoad',
      name: 'IRQ load',
      description: 'Load due to IRQ',
      factor: 1,
      unit: '%',
      writable: false,
    },

    {
      label: 'N',
      variable: 'fsMinimalUse',
      name: 'FS minimal use',
      description: 'Minimal percent spaced used in a filesystem',
      factor: 1,
      unit: '%',
      writable: false,
    },
    {
      label: 'O',
      variable: 'fsMaximalUse',
      name: 'FS maximal use',
      description: 'Maximal percent spaced used in a filesystem',
      factor: 1,
      unit: '%',
      writable: false,
    },
    {
      label: 'P',
    },
  ],
};
