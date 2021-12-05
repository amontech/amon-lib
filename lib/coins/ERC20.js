const ERC20Coins = require('./ERC20coins.json');
const EthereumHelper = require('./ethereum');

class ERC20Helper extends EthereumHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = ERC20Coins[this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl(address) {
    return this._etherscanUrl() + `/token/${this.tokenAddress}?a=${address}`;
  }

  static createToken(coinCode) {
    if (!ERC20Coins[coinCode]) throw new Error('Unknown ERC20 token');

    class ERC20Token extends ERC20Helper {}

    ERC20Token.prototype.coinCode = coinCode;
    ERC20Token.code = coinCode;
    ERC20Token.isToken = true;
    ERC20Token.decimals = ERC20Coins[coinCode].decimals;

    return ERC20Token;
  }
}

module.exports = ERC20Helper;
