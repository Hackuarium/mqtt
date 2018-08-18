'use strict';

module.exports = {
  name: 'Simple spectrophotometer',
  kind: 'SimpleSpectro',
  numberParameters: 26,
  description: '',
  url: '',
  parameters: [
    {
      label: 'A',
      name: 'Transmission of sample (Red)',
      description: 'Frequency related to the energy of red led through sample',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'B',
      name: 'Transmission of sample (Green)',
      description:
        'Frequency related to the energy of green led through sample',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'C',
      name: 'Transmission of sample (Blue)',
      description: 'Frequency related to the energy of blue led through sample',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'D',
      name: 'Emission of sample (Blue)',
      description:
        'Frequency related to the energy of blue perpendicular led re-emitted by sample (fluorescence)',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'F',
      name: 'Transmission of blank (Red)',
      description: 'Frequency related to the energy of red led through blank',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'G',
      name: 'Transmission of blank (Green)',
      description: 'Frequency related to the energy of green led through blank',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'H',
      name: 'Transmission of blank (Blue)',
      description: 'Frequency related to the energy of blue led through blank',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'I',
      name: 'Emission of blank (Blue)',
      description:
        'Frequency related to the energy of blue perpendicular led re-emitted by blank (fluorescence)',
      factor: 1,
      unit: 'Hz',
      writable: false
    },

    {
      label: 'K',
      name: 'Delay before blank',
      description: 'Delay before the acquisition of the blank in seconds',
      factor: 1,
      unit: 's',
      writable: true
    },

    {
      label: 'L',
      name: 'Delay before sample',
      description: 'Delay before the acquisition of the sample in seconds',
      factor: 1,
      unit: 's',
      writable: true
    },

    {
      label: 'M',
      name: 'Delay between experiments',
      description:
        'Delay between the acquisition of the experiments (kinetic) in seconds',
      factor: 1,
      unit: 's',
      writable: true
    },

    {
      label: 'N',
      name: 'Nb experiments',
      description:
        'Number of experiments for kinetic (max 240 / (number colors + 1))',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'O',
      name: 'Next exp. number',
      description: 'Number of the next experiment',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'P',
      name: 'Waiting time',
      description: 'Current waiting time before next experiment',
      factor: 1,
      unit: 's',
      writable: false
    },

    {
      label: 'Q',
      name: 'Nb sampling',
      description:
        'Number of acquisitions of 100ms that will be taken (default 10). This value could be reduced for fast kinetic',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'R',
      name: 'Invert rotary',
      description: ' Invert the rotary button direction',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'S',
      name: 'Battery voltage',
      description: 'Current battery voltage',
      factor: 100,
      unit: 'V',
      writable: true
    },

    {
      label: 'T',
      name: 'Temperature',
      description: 'Current temperature',
      factor: 100,
      unit: '°C',
      writable: true
    },

    {
      label: 'V',
      name: 'Active channels',
      description:
        'Active leds and other. A number between 0 and 63. Each bit represents a function (Red, Green, Blue, UV, Voltage, Temperature). 5 would correspond to Red and Blue (binary combination).',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'W',
      name: 'Error',
      description: 'Error',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'X',
      name: 'Result channel',
      description: 'Value of the channel that will be displayed in the result',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'Y',
      name: 'Status',
      description: 'Status',
      factor: 1,
      unit: '',
      writable: true
    },

    {
      label: 'Z',
      name: 'Current menu',
      description: 'Current menu',
      factor: 1,
      unit: '',
      writable: true
    }
  ]
};
