# legoino-util

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

## Installation

`$ npm install ml-legoino-util`

## [API Documentation](https://mljs.github.io/legoino-util/)

## Example

```js
createCompactLog(
  {
    id: 65535,
    epoch: 32767,
    parameters: {
      A: 1,
      B: 2,
      C: 3,
      D: 4
    },
    eventId: 5,
    eventValue: 6,
    deviceId: 0xaaaa - 65536
  },
  4
);
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-legoino-util.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ml-legoino-util
[travis-image]: https://img.shields.io/travis/mljs/legoino-util/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/legoino-util
[david-image]: https://img.shields.io/david/mljs/legoino-util.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/legoino-util
[download-image]: https://img.shields.io/npm/dm/ml-legoino-util.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/ml-legoino-util
