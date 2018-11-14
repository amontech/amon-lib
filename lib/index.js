//const URI = require('./uri');
const crypto = require('./crypto');
const Coins = require('./coins');

/**
 * AmonLib
 * Contains all the blockchain tools
 */
class AmonLib {
  /**
   *
   * @param opts Options
   * @param opts.network blockchain network (regtest, testnet, mainnet)
   */
  constructor(opts) {
    this.opts = Object.assign({
      network: 'mainnet',
    }, opts);
  }

  /**
   * Get coin utility instance
   * @param {string} coinCode code of the coin to use (BTC, ETH, ...)
   * @return {Promise<Coin>} Coin
   */
  coins(coinCode) {

    const Coin = Coins[coinCode];

    if(!Coin) {
      throw new Error('Unknown coin');
    }

    return new Coin(this.opts);

  }
}

AmonLib.crypto = crypto;
AmonLib.prototype.crypto = crypto;

module.exports = AmonLib;
