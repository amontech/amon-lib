const coins = require('./coins.json');
const TronHelper = require('../tron');

const COIN = 'TRX';
class TRC20Helper extends TronHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = coins[COIN][this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'trc20';
  }

  addressExplorerUrl(address) {
    return this._tronscanUrl() + `/token20/${this.tokenAddress}?a=${address}`;
  }

  static createToken(tokenCode) {
    if (!coins[COIN][tokenCode]) throw new Error('Unknown TRC20 token');

    class TRC20Token extends TRC20Helper {}

    TRC20Token.prototype.coinCode = tokenCode;
    TRC20Token.code = tokenCode;
    TRC20Token.isToken = true;
    TRC20Token.decimals = coins[COIN][tokenCode].decimals;

    return TRC20Token;
  }
}

module.exports = TRC20Helper;
