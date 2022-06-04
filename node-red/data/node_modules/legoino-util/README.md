# legoino-util

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

Create and parse compact logs.

## Installation

`$ npm install legoino-util`

## [API Documentation](https://hackuarium.github.io/legoino-util/)

## Example
### Create compact log

```js
'use strict';

const { createCompactLog } = require('legoino-util');

let result = createCompactLog(
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
// result is a string with value '0000FFFF00007FFF000100020003000400050006AAAA87'
```

### Parse current settings

```js
'use strict';

const { parseCurrentSettings } = require('legoino-util');

let result = parseCurrentSettings('0000FFFF00007FFF000100020003000400050006AAAA87');
// result is a JSON (object)
```

### Parse multi-logs

Parse many lines of logs in one go. The lines must be separated by carriage returns.

```js
'use strict';

const { parseMultilog } = require('legoino-util');

var multilog = `
000100005B77EFBE0046000E003800000000000000000013000C00060000005100010011004080000000000004D242
000100015B77EFC10046000E003800000000000000000044003200100000002000020011004080000000000004D231
000100025B77EFC40047000E00380000000000020002002F0024000A0000003500010011004080000000000004D247
`

let result = parseMultilog(multilog);
// result is a JSON (array of objects)
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
