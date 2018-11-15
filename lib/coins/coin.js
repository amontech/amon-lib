/**
 * Coin utility
 * This is the base abstract class, instanciate via AmonLib.coins only
 */
class CoinHelper {

  /**
   *
   * @param opts
   */
  constructor(opts) {
    this.opts = opts;
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

};

module.exports = CoinHelper;
