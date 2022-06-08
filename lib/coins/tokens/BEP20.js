const coins = require('./coins.json');
const BinanceHelper = require('../binance');

const COIN = 'BNB';

class BEP20Helper extends BinanceHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = coins[COIN][this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'bep20';
  }

  addressExplorerUrl(address) {
    return this._bscscanUrl() + `/token/${this.tokenAddress}?a=${address}`;
  }

  static createToken(tokenCode) {
    if (![tokenCode]) throw new Error('Unknown BEP20 token');

    class BEP20Token extends BEP20Helper {}

    BEP20Token.prototype.coinCode = tokenCode;
    BEP20Token.code = tokenCode;
    BEP20Token.isToken = true;
    BEP20Token.decimals = coins[COIN][tokenCode].decimals;

    return BEP20Token;
  }
}

module.exports = BEP20Helper;
