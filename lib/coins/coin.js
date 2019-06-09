const Decimal = require('decimal.js');

/**
 * Coin utility
 * This is the base abstract class, instanciate via AmonLib.coins only
 */
class CoinHelper {

  /**
   *
   * @param opts
   */
  constructor(opts = { network: 'mainnet' }) {
    this.opts = opts;
  }

  /**
   *  get uri prefix
   *  @return str prefix
   */
  getURIPrefix() {
    throw new Error('not implemented');
  }
  /**
   *  Validate blockchain address
   *  @return bool valid
   */
  validAddress(address) {
    throw new Error('not implemented');
  }

  /**
   *  Get URL of block explorer for an address
   *  @return string URL
   */
  addressExplorerUrl(address) {
    throw new Error('not implemented');
  }

  /**
   *  Get URL of block explorer for a transaction
   *  @return string URL
   */
  txExplorerUrl(txId) {
    throw new Error('not implemented');
  }

  amountUnitToFloat(amount){

    const decimals = this.constructor.decimals;
    if(!Decimal(decimals).isInteger()) throw new Error('Coin decimals not set');

    return new Decimal(amount).floor(0).div(10**decimals).toFixed();

  }

  amountFloatToUnit(amount){

    const decimals = this.constructor.decimals;
    if(!Decimal(decimals).isInteger()) throw new Error('Coin decimals not set');

    return new Decimal(amount).mul(10**decimals).floor(0).toFixed();

  }

}

module.exports = CoinHelper;
