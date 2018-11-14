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
  validAddress(addess) {
    throw new Error('not implemented');
  }

};

module.exports = CoinHelper;
