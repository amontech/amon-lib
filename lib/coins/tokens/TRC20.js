const TRC20Coins = require('./coins.json');
const BinanceHelper = require('../binance');

class TRC20Helper extends BinanceHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = TRC20coins[this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'trc20';
  }

  addressExplorerUrl(address) {
    return this._bscscanUrl() + `/token/${this.tokenAddress}?a=${address}`;
  }

  static createToken(coinCode) {
    if (![coinCode]) throw new Error('Unknown TRC20 token');

    class TRC20Token extends TRC20Helper {}

    TRC20Token.prototype.coinCode = coinCode;
    TRC20Token.code = coinCode;
    TRC20Token.isToken = true;
    TRC20Token.decimals = TRC20coins[coinCode].decimals;

    return TRC20Token;
  }
}

module.exports = TRC20Helper;
