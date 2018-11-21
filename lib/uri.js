const qs = require('qs');

/**
 * URI parser and generator
 */
class URI {

  /**
   *
   * Create new instance of URI from parameters
   *
   * @param {Object} data
   * @param {string} data.address
   * @param {?string} data.coinCode [BTC, ETH]
   * @param {?string} data.amount Amount requested, optional
   *
   */
  constructor(coins) {

    this.coins = coins;

    this.regex = /([a-z]+):\/?\/?([^?]+)(\?([^]+))?/;

  }

  parse(str) {

    if (this.isURI(str)) {

      return this.parseURI(str);

    } else {

      const coin = this.getCoinFromAddress(str);

      if (coin) {

        return {
          coinCode: coin.constructor.code,
          address: str,
        };

      } else {

        throw new Error(`Unable to parse URI: ${str}`)

      }
    }
  }

  /**
   *
   * This generate an URI string to be used in links or QR-code
   * @return {string} URI as text
   */
  stringify(params) {

    const { address, coinCode, amount } = params;

    const coin = this.getCoinFromCode(coinCode);

    if(!coin) {
      throw new Error(`Unknown coin code: ${coinCode}`);
    }

    let uri = `${coin.getURIPrefix()}:`;
    uri += address;

    const options = {};

    if (amount) {
      options.amount = amount;
    }

    if (Object.keys(options).length > 0) {

      uri += '?';
      const query = qs.stringify(options);
      uri += query;

    }
    return uri;

  }


  getCoinFromAddress(address) {
    return this.findCoin(coin => coin.validAddress(address));
  }
  getCoinFromPrefix(prefix) {
    return this.findCoin(coin => coin.getURIPrefix() === prefix);
  }
  getCoinFromCode(code) {
    return this.coins[code];
  }

  /**
   *
   * @param {function} fn
   * @return {Object|null} coin
   * @return {string} coin.code
   * @return {string} coin.prefix
   * @return {function} coin.validAddress
   *
   */
  findCoin(fn) {
    return Object.keys(this.coins)
      .map(coinCode => this.coins[coinCode])
      .find(fn);
  }

  isURI(str) {
    return this.regex.test(str);
  }

  isAddress(str) {
    return !!this.getCoinFromAddress(str);
  }

  parseURI(str) {
    const qregex = this.regex.exec(str);
    if (!qregex) throw new Error(`Invalid URI: ${str}`);

    const prefix = qregex[1];
    const address = qregex[2];

    const query = qregex[4];
    const options = qs.parse(query);
    const { amount } = options;

    const coin = this.getCoinFromPrefix(prefix);

    if(!coin) {
      throw new Error(`Unknown URI protocol: ${prefix}`);
    }

    const data = {
      coinCode: coin.constructor.code,
      address,
      amount,
    };

    return data;
  }


}

module.exports = URI;
