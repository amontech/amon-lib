# AMON libraries

[![CircleCI](https://circleci.com/gh/amontech/amon-lib/tree/master.svg?style=svg&circle-token=35a5a437b160dcd5edeb20b19b5b75fcebd7082d)](https://circleci.com/gh/amontech/amon-lib/tree/master)

This library is a set of common utilities used in various part of AMON projects.

## Documentation:

[API Documentation](https://amontech.github.io/amon-lib/)

## Install

```
npm i -S amon-lib
```

## Examples

### URI

#### Import
```js
const URI = require('amon-lib').URI;
```

#### Parse URI

```js
const str = 'bitcoin:mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe?amount=0.12';
const uri = URI.parse(str);
const { address, coinCode, amount } = uri; // => { mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe, BTC, 0.12 }
```

#### Generate URI

```js
const data = {
    coinCode: 'BTC',
    address: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
    amount: '0.12',
};

const uri = new URI(data);
const str = uri.toString(); // => bitcoin:mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe?amount=0.12
```


### Hash

#### Import
```js
const Crypto = require('amon-lib').Crypto;
```

#### SHA-256

```js
const password = 'secretsanta';
const hash = Crypto.sha.hash(password); // => 0a4f185e2483d5ea4e370c6b4ee31c51840f212a7c25de997509a8953d5fcb86
```

#### bcrypt

```js
const password = 'secretsanta';
const hash = Crypto.bcrypt.hash(password); // => 0a4f185e2483d5ea4e370c6b4ee31c51840f212a7c25de997509a8953d5fcb86
const valid = Crypto.bcrypt.verifyHash(password, hash); // => true
```
