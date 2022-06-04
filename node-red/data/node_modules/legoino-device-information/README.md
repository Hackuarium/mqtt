# legoino-device-information

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

Device information for all our arduino derived projects

## Installation

`$ npm install legoino-device-information`

## [API Documentation](https://hackuarium.github.io/legoino-device-information/)

## Example

```js
const legoinoDeviceInformation = require('legoino-device-information');
```

## Device ID

Depending the first letter of the device ID we can guess what kind of device it is. All the devices are expected to have a unique ID.

- `B`: Beemos device
- `C`: Computer
- `$`: OpenBio
- `6`: OpenBio6
- `S`: OpenSpectro
- `T`: SimpleSpectro
- `#`: Solar2015

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/legoino-device-information.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/legoino-device-information
[travis-image]: https://img.shields.io/travis/cheminfo-js/legoino-device-information/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/legoino-device-information
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo-js/legoino-device-information.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo-js/legoino-device-information
[david-image]: https://img.shields.io/david/cheminfo-js/legoino-device-information.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/legoino-device-information
[download-image]: https://img.shields.io/npm/dm/legoino-device-information.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/legoino-device-information
