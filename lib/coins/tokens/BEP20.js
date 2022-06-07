const BEP20Coins = require('./BEP20coins.json');
const BinanceHelper = require('../binance');

class BEP20Helper extends BinanceHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = BEP20Coins[this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'bep20';
  }

  addressExplorerUrl(address) {
    return this._bscscanUrl() + `/token/${this.tokenAddress}?a=${address}`;
  }

  static createToken(coinCode) {
    if (!   [coinCode]) throw new Error('Unknown BEP20 token');

    class BEP20Token extends BEP20Helper {}

    BEP20Token.prototype.coinCode = coinCode;
    BEP20Token.code = coinCode;
    BEP20Token.isToken = true;
    BEP20Token.decimals = BEP20Coins[coinCode].decimals;

    return BEP20Token;
  }
}

module.exports = BEP20Helper;
