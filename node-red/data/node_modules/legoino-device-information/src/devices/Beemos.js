'use strict';

module.exports = {
  name: 'Bee Monistoring System',
  kind: 'Beemos',
  numberParameters: 26,
  description: '',
  url: '',
  parameters: [
    {
      label: 'A',
      name: 'Ext temperature',
      description: 'External temperature',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'B',
      name: 'Ext humidity',
      description: 'External humidity',
      factor: 100,
      unit: '%',
      writable: false
    },

    {
      label: 'C',
      name: 'Luminosity',
      description: 'Luminosity (Arbitrary unit)',
      factor: 10.24,
      unit: '',
      writable: false
    },

    {
      label: 'D',
      name: 'Pressure',
      description: 'Press',
      factor: 1,
      unit: 'mbar',
      writable: false
    },

    {
      label: 'E',
      name: 'Int temperature',
      description: 'Internal temperature',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'F',
      name: 'Int humidity',
      description: 'Internal humidity',
      factor: 100,
      unit: '%',
      writable: false
    },

    {
      label: 'G',
      name: 'Int temperature A',
      description: 'Internal temperature A',
      factor: 100,
      unit: '°C',
      writable: false
    },
    {
      label: 'H',
      name: 'Int temperature B',
      description: 'Internal temperature B',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'I',
      name: 'Weight',
      description: 'Weight',
      factor: 100,
      unit: 'kg',
      writable: false
    },

    {
      label: 'J',
      name: 'Battery',
      description: 'Battery voltage',
      factor: 100,
      unit: 'V',
      writable: false
    },

    {
      label: 'K',
      name: 'Gate 1 IN',
      description: 'Number of input on gate 1',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'L',
      name: 'Gate 1 OUT',
      description: 'Number of output on gate 1',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'M',
      name: 'Gate 2 IN',
      description: 'Number of input on gate 2',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'N',
      name: 'Gate 2 OUT',
      description: 'Number of output on gate 2',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'O',
      name: 'Gate 3 IN',
      description: 'Number of input on gate 3',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'P',
      name: 'Gate 3 OUT',
      description: 'Number of output on gate 3',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'Q',
      name: 'Gate 4 IN',
      description: 'Number of input on gate 4',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'R',
      name: 'Gate 4 OUT',
      description: 'Number of output on gate 4',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'S',
      name: 'Gate 5 IN',
      description: 'Number of input on gate 5',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'T',
      name: 'Gate 5 OUT',
      description: 'Number of output on gate 5',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'U',
      name: 'Gate 6 IN',
      description: 'Number of input on gate 6',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'V',
      name: 'Gate 6 OUT',
      description: 'Number of output on gate 6',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'W',
      name: 'Gate 7 IN',
      description: 'Number of input on gate 7',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'X',
      name: 'Gate 7 OUT',
      description: 'Number of output on gate 7',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'Y',
      name: 'Gate 8 IN',
      description: 'Number of input on gate 8',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'Z',
      name: 'Gate 8 OUT',
      description: 'Number of output on gate 8',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AA',
      name: 'Weight',
      description: 'Weight in internal unit',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AB',
      name: 'Weight offset',
      description: 'Offset to convert weight from internal unit',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AC',
      name: 'Weight factor',
      description: 'Factor to convert the weight from internal unit',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AD',
      name: 'Charging',
      description: 'Indication showing if the battery is charging',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AE',
      name: 'Logging interval',
      description: 'Interval in seconds between logs',
      factor: 1,
      unit: 's',
      writable: true
    },


  ]
};
