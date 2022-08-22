![image](https://github.com/TRRXITTE/traaittPlatform/blob/master/docs/etrx.png)

# traaittPlatform Javascript Utilities

[![NPM](https://nodei.co/npm/@trrxitte/traaittplatform-utils.png?downloads=true&stars=true)](https://nodei.co/npm/@trrxitte/traaittplatform-utils/)

![Prerequisite](https://img.shields.io/badge/node-%3E%3D6-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://utils.traaittplatform.dev) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/traaittplatform/traaittplatform-utils/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://github.com/traaittplatform/traaittplatform-utils/blob/master/LICENSE) [![Twitter: TurtlePay](https://img.shields.io/twitter/follow/_traaittPlatform.svg?style=social)](https://twitter.com/_traaittPlatform)

#### Master Build Status
[![Build Status](https://travis-ci.org/trrxitte/traaittplatform-utils.svg?branch=master)](https://travis-ci.org/trrxitte/traaittplatform-utils)

#### Development Build Status
[![Build Status](https://travis-ci.org/trrxitte/traaittplatform-utils.svg?branch=development)](https://travis-ci.org/trrxitte/traaittplatform-utils/branches)

This package contains code that wraps [traaittplatform-crypto](https://github.com/traaittplatform/traaittplatform-crypto) primitives into an easier to use interface. This includes the ability to easily discover funds for a wallet, create transactions, sign transactions (ring signatures), create new wallets, verify addresses, and handful of other useful methods. These methods can then be wrapped into a Javascript-based wallet such as [traaittplatform-wallet-backend-js](https://github.com/traaittplatform/traaittplatform-wallet-backend-js).

If you experience any issues with this library, the best way to address such situations is to submit a Pull Request to resolve the issue you are running into.

## Installation

```bash
npm install traaittplatform-utils
```

## Initialization

### JavaScript

```javascript
const traaittPlatformUtils = require('traaittplatform-utils').CryptoNote
const coinUtils = new traaittPlatformUtils()
```

### TypeScript

```typescript
import { CryptoNote } from 'traaittplatform-utils'
const coinUtils = new CryptoNote()
```

You can find TypeScript type definitions [here](index.d.ts)

### Browser Support

When packing for the browser with a tool like [webpack](https://webpack.js.org/) we advise that you use the ready `event` of the webpacked module to determine when the Cryptographic methods are available.

```html
<script src="traaittPlatformUtils.js"></script>
<script>
  traaittPlatformUtils.on('ready', () => {
    const coinUtils = new traaittPlatformUtils.CryptoNote()
  })
</script>
```

### Documentation

You can find the full documentation for this library [here](https://utils.traaittplatform.dev)

### Credits

Special thanks goes out to:

* Lucas Jones
* Paul Shapiro
* Luigi111
* [The MyMonero Project](https://github.com/mymonero/mymonero-app-js)
* The Masari Project: [gnock](https://github.com/gnock)
* The Plentum Project: [DaveLong](https://github.com/DaveLong)
