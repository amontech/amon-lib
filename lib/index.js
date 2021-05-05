const crypto = require('./crypto');
const Coins = require('./coins');
const URI = require('./uri');
const ERC20Helper = require('./coins/ERC20');
const ERC20Coins = require('./coins/ERC20coins.json');
const cardCountries = require('./json/card-countries.json');
const countries = require('./json/countries.json');
const currencies = require('./json/currencies.json');
const errorCodes = require('./json/error-codes.json');

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

  /**
   * Add a custom ERC20 token
   * @param {object} erc20Data
   * @param {string} erc20Data.code Token code
   * @param {number} erc20Data.decimals Token decimals
   * @param {string} erc20Data.testnetAddress Token testnet address
   * @param {string} erc20Data.mainnetAddress Token mainnet address
   */
  addERC20(erc20Data) {
    const {
      code, decimals, testnetAddress, mainnetAddress,
    } = erc20Data;

    ERC20Coins[code] = {
      decimals,
      testnet: testnetAddress,
      mainnet: mainnetAddress,
    };

    this.coinsInstances[code] = new (ERC20Helper.createToken(code))(this.opts);
  }

}

AmonLib.crypto = crypto;
AmonLib.prototype.crypto = crypto;
AmonLib.prototype.cardCountries = cardCountries;
AmonLib.prototype.countries = countries;
AmonLib.prototype.currencies = currencies;
AmonLib.prototype.errorCodes = errorCodes;

module.exports = AmonLib;
