# AMON libraries

[![CircleCI](https://circleci.com/gh/amontech/amon-lib/tree/master.svg?style=svg&circle-token=35a5a437b160dcd5edeb20b19b5b75fcebd7082d)](https://circleci.com/gh/amontech/amon-lib/tree/master)

This library is a set of common utilities used in various part of AMON projects.

## Documentation:

[API Documentation](https://amontech.github.io/amon-lib/)

## Install

Install via npm or yarn
```bash
npm i -S amon-lib
yarn add amon-lib
```

Import in your project
```javascript
const AmonLib = require('amon-lib');
import AmonLib from 'amon-lib';
```

## Examples

First you need to get an instance of AmonLib. This instance is useful to use the lib on different networks.

```javascript
const amonLib = new AmonLib({ network: 'mainnet' });
```

`network` can be either `mainnet` or `testnet`

### Coins

Supported coins: `BTC`, `ETH`, `AMN`
- Validate address
```javascript
const validAddress = amonLib.coins('BTC').validAddress('1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9');
// validAddress = true
```

- Transaction block explorer url
```javascript
const txExplorerUrl = amonLib.coins('BTC').txExplorerUrl('ad44d7ff0a7a1e433d00fbe9db1a8cf4cd509c3bb928c3963f2e4575fc4c5861');
// txExplorerUrl = 'https://live.blockcypher.com/btc/tx/ad44d7ff0a7a1e433d00fbe9db1a8cf4cd509c3bb928c3963f2e4575fc4c5861'
```

- Address block explorer url
```javascript
const addressExplorerUrl = amonLib.coins('BTC').addressExplorerUrl('1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9');
// addressExplorerUrl = 'https://live.blockcypher.com/btc/address/1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9'
```

### URI

#### Parse URI

```js
const data = amonLib.URI.parse('bitcoin:mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe?amount=0.12');
const { address, coinCode, amount } = data; 
// address = mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe
// coinCode = BTC
// amount = 0.12
```

#### Generate URI

```js
const data = {
    coinCode: 'BTC',
    address: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
    amount: '0.12',
};

const str = amonLib.URI.stringify(data); 
// str = bitcoin:mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe?amount=0.12
```


### Hash

#### SHA-256

```js
const password = 'secretsanta';
const hash = AmonLib.crypto.sha.hash(password); // => 0a4f185e2483d5ea4e370c6b4ee31c51840f212a7c25de997509a8953d5fcb86
```

#### bcrypt

```js
const password = 'secretsanta';
const hash = AmonLib.crypto.bcrypt.hash(password); // => 0a4f185e2483d5ea4e370c6b4ee31c51840f212a7c25de997509a8953d5fcb86
const valid = AmonLib.crypto.bcrypt.verifyHash(password, hash); // => true
```
