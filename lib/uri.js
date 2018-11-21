const qs = require('qs');

/**
 * URI parser and generator
 */
class URI {

  /**
   *
   * URI Methods. Shall only be used on AmonLib.URI instance.
   * Do not instanciate by yourself.
   *
   */
  constructor(coins) {

    this.coins = coins;

    this.regex = /([a-z]+):\/?\/?([^?]+)(\?([^]+))?/;

  }

  /**
   *
   * This parses an URI to an object.
   * Input is a string, either an address or a valid URI
   *
   * @param {Object} str address or URI
   *
   * @return {Object} obj
   * @return {string} obj.address
   * @return {?string} obj.coinCode [BTC, ETH]
   * @return {?string} obj.amount Amount requested, optional
   */
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
   *
   * @param {Object} params
   * @param {string} params.address
   * @param {?string} params.coinCode [BTC, ETH]
   * @param {?string} params.amount Amount requested, optional
   *
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
    return this.findCoin(coin =>
      !coin.constructor.isToken &&
      coin.validAddress(address)
    );
  }
  getCoinFromPrefix(prefix) {
    return this.findCoin(coin => coin.getURIPrefix() === prefix);
  }
  getCoinFromCode(code) {
    return this.coins[code];
  }

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
