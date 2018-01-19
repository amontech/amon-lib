const qs = require('qs');

const Cryptos = require('./cryptos');

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
  constructor(data) {
    if(!data || !data.address) {
      throw new Error('URI need at least address');
    }
    this.address = data.address;
    this.coinCode = data.coinCode;
    this.amount = data.amount;

    if(this.coinCode) {
      this.coin = URI_statics.getCoinFromCode(this.coinCode);
      if(!this.coin) {
        throw new Error(`Unknown coin code: ${this.coinCode}`);
      }
    }
  }

  /**
   *
   * This generate an URI string to be used in links or QR-code
   * @return {string} URI as text
   */
  toString() {

    if(!this.coin) {
      return this.address;
    }

    let uri = `${this.coin.prefix}:`;
    uri += this.address;

    const options = {};

    if(this.amount) {
      options.amount = this.amount;
    }

    if(Object.keys(options).length > 0) {

      uri += '?';
      const query = qs.stringify(options);
      uri += query;

    }
    return uri;

  }

  /**
   * Get this instance's parameters
   * @return {{address: URI.address, coinCode: URI.coinCode, amount: URI.amount}}
   */
  toObject() {
    const { address, coinCode, amount } = this;
    return { address, coinCode, amount };
  }

  /**
   *
   * Parse a string to detect coin type, address and options
   *
   * @param {string} str URI to parse. Can be just an address or a complete URI.
   * @return {URI} URI instance
   */
  static parse(str) {
    if(URI_statics.isURI(str)) {

      return URI_statics.parseURI(str);

    } else {

      const coin = URI_statics.getCoinFromAddress(str);

      if (coin) {

        const data = {
          coinCode: coin.code,
          address: str,
        };
        return new URI(data);

      } else {

        throw new Error(`Unable to parse URI: ${str}`)

      }
    }
  }

}

const URI_statics = {

  // regex: /[a-z]+:[a-zA-Z0-9]+/,
  regex: /([a-z]+):\/?\/?([^?]+)(\?([^]+))?/,

  coins: [
    {
      code: 'BTC',
      prefix: 'bitcoin',
      validAddress: Cryptos.bitcoin.validAddress,
    },
    {
      code: 'ETH',
      prefix: 'ethereum',
      validAddress: Cryptos.ethereum.validAddress,
    },
  ],

  getCoinFromAddress: address => URI_statics.findCoin(coin => coin.validAddress(address)),
  getCoinFromPrefix: prefix => URI_statics.findCoin(coin => coin.prefix === prefix),
  getCoinFromCode: code => URI_statics.findCoin(coin => coin.code === code),

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
    return URI_statics.coins.map(coin => fn(coin) ? coin : null)
      .filter(c => !!c)[0];
  },

  isURI(str) {
    return URI_statics.regex.test(str);
  },

  isAddress(str) {
    return !!URI_statics.getCoinFromAddress(str);
  },

  parseURI(str) {
    const qregex = URI_statics.regex.exec(str);
    if (!qregex) throw new Error(`Invalid URI: ${str}`);

    const prefix = qregex[1];
    const address = qregex[2];

    const query = qregex[4];
    const options = qs.parse(query);
    const { amount } = options;

    const coin = URI_statics.getCoinFromPrefix(prefix);

    if(!coin) {
      throw new Error(`Unknown URI protocol: ${prefix}`);
    }

    const data = {
      coinCode: coin.code,
      address,
      amount,
    };
    return new URI(data);
  },

};

URI._statics = URI_statics;

module.exports = URI;
