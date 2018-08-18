'use strict';

module.exports = {
  name: 'Open spectrophotometer',
  kind: 'OpenSpectro',
  numberParameters: 26,
  description: '',
  url: '',
  parameters: [
    {
      label: 'A',
      name: 'Red point',
      description: 'which point of the linear detector is the maximum for red',
      factor: 1,
      unit: 'pixel#',
      writable: false
    },

    {
      label: 'B',
      name: 'Green point',
      description: 'which point of the linear detector is the maximum for green',
      factor: 1,
      unit: 'pixel#',
      writable: false
    },

    {
      label: 'C',
      name: 'Blue point',
      description: 'which point of the linear detector is the maximum for blue',
      factor: 1,
      unit: 'pixel#',
      writable: false
    },


    {
      label: 'D', name: 'Compression', description: '0 means no compression, can be set',
      factor: 1, unit: '',
      writable: true
    },
    {
      label: 'E', name: 'R-Intensity', description: 'Red led intensity (0 to 255)',
      factor: 1, unit: '',
      writable: false
    },

    {
      label: 'F', name: 'G-Intensity', description: 'Green led intensity (0 to 255)',
      factor: 1, unit: '',
      writable: false
    },
    {
      label: 'G', name: 'B-Intensity', description: 'Blue led intensity (0 to 255)',
      factor: 1, unit: '',
      writable: false
    },

    {
      label: 'H', name: 'Scan#', description: 'Number of scans (maximum 64)',
      factor: 1, unit: '',
      min: 1, max: 64,
      writable: true
    },

    {
      label: 'I', name: 'DelayExp', description: 'Delay between experiments in seconds',
      factor: 1, unit: 's',
      writable: false
    },

    {
      label: 'J', name: 'Acq Time', description: 'Accumulation time in ms(in ms, good value=30)',
      factor: 1, unit: 'ms',
      writable: true
    },

    {
      label: 'K', name: 'lambda-R', description: 'Red maximum wavelength (nm)',
      factor: 1, unit: 'nm',
      writable: false
    },

    {
      label: 'L', name: 'lambda-G', description: 'Green maximum wavelength (nm)',
      factor: 1, unit: 'nm',
      writable: false
    },

    {
      label: 'M', name: 'lambda-M', description: 'Blue maximum wavelength (nm)',
      factor: 1, unit: 'nm',
      writable: false
    },

    {
      label: 'U', name: 'red test', description: 'Set intensity of red led for test (0 -> 255)',
      factor: 1, unit: '',
      writable: false
    },
    {
      label: 'V', name: 'green test', description: 'Set intensity of green led for test (0 -> 255)',
      factor: 1, unit: '',
      writable: false
    },
    {
      label: 'W', name: 'blue test', description: 'Set intensity of blue led for test (0 -> 255)',
      factor: 1, unit: '',
      writable: false
    },
    {
      label: 'X', name: 'white test', description: 'Set intensity of white led for test (0 -> 255)',
      factor: 1, unit: '',
      writable: false
    },

  ]
};
