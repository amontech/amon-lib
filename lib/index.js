const crypto = require('./crypto');
const Coins = require('./coins');
const URI = require('./uri');
const coins = require('./coins/tokens/coins.json');
const cardCountries = require('./json/card-countries.json');
const countries = require('./json/countries.json');
const currencies = require('./json/currencies.json');
const errorCodes = require('./json/error-codes.json');
const Utils = require('./helpers/utils');
const TokenHelper = require('./coins/tokens/token');
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
    this.opts = Object.assign(
      {
        network: 'mainnet',
      },
      opts
    );

    this.coinsInstances = Object.keys(Coins).reduce((acc, coinCode) => {
      const Coin = Coins[coinCode];
      if (!!Coin && Coin.constructor === Object) {
        Object.keys(Coin).reduce((_, tokenCode) => {
          const isCoinCode = Utils.isCoinCode(coinCode, tokenCode);
          const coinFormat = isCoinCode ? tokenCode : `${coinCode}_${tokenCode}`;
          acc[coinFormat] = new Coin[tokenCode](opts);
        }, {});
      } else {
        acc[coinCode] = new Coin(opts);
      }
      return acc;
    }, {});
    this.URI = new URI(this.coinsInstances);
  }

  /**
   * Get coin utility instance
   * @param {string} coinCode code of the coin to use (BTC, ETH, ...)
   * @return {Promise<Coin>} Coin
   */

  coins(coinCode, tokenCode) {
    let Coin = this.coinsInstances[coinCode];
    if (coinCode && tokenCode) {
      Coin = this.coinsInstances[`_${coinCode}_${tokenCode}`];
    }

    if (!Coin) {
      throw new Error('Unknown coin');
    }

    return Coin;
  }

  /**
   * Add a custom token
   * @param {object} tokenData
   * @param {string} tokenData.coinCode Coin code
   * @param {string} tokenData.tokenCode Token code
   * @param {number} tokenData.decimals Token decimals
   * @param {string} tokenData.testnetAddress Token testnet address
   * @param {string} tokenData.mainnetAddress Token mainnet address
   */
  addToken(tokenData) {
    const { coinCode, tokenCode, decimals, testnetAddress, mainnetAddress } = tokenData;

    if (!coins[coinCode]) throw new Error('Unknown coinCode');

    coins[coinCode][tokenCode] = {
      decimals,
      testnet: testnetAddress,
      mainnet: mainnetAddress,
    };

    this.coinsInstances[`_${coinCode}_${tokenCode}`] = new (TokenHelper.getToken(coinCode, tokenCode))(this.opts);
  }
}

AmonLib.crypto = crypto;
AmonLib.prototype.crypto = crypto;
AmonLib.prototype.cardCountries = cardCountries;
AmonLib.prototype.countries = countries;
AmonLib.prototype.currencies = currencies;
AmonLib.prototype.errorCodes = errorCodes;

module.exports = AmonLib;
