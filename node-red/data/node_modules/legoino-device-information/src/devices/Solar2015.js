'use strict';

module.exports = {
  name: 'Solar decathlon 2015',
  kind: 'Solar',
  numberParameters: 4,
  numberLogParameters: 4,
  description: '',
  url: '',
  parameters: [
    {
      label: 'A',
      name: 'Temperature',
      description: '',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'B',
      name: 'Light',
      description: '',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'C',
      name: 'Pressure',
      description: '',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'D',
      name: 'Humidity',
      description: '',
      factor: 10,
      unit: '%',
      writable: false
    }
  ]
};
