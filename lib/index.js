const crypto = require('./crypto');
const Coins = require('./coins');
const URI = require('./uri');

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

    this.coinsInstances = Object.keys(Coins).reduce( (acc, coinCode) => {

      acc[coinCode] = new Coins[coinCode](this.opts);
      return acc;

    }, {});

    this.URI = new URI(this.coinsInstances);
  }

  /**
   * Get coin utility instance
   * @param {string} coinCode code of the coin to use (BTC, ETH, ...)
   * @return {Promise<Coin>} Coin
   */
  coins(coinCode) {

    const Coin = this.coinsInstances[coinCode];

    if(!Coin) {
      throw new Error('Unknown coin');
    }

    return Coin;

  }

}

AmonLib.crypto = crypto;
AmonLib.prototype.crypto = crypto;

module.exports = AmonLib;
