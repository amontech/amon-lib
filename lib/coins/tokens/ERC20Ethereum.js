const ERC20EthereumCoins = require('./ERC20EthereumCoins.json');
const EthereumHelper = require('../ethereum');

class ERC20EthereumHelper extends EthereumHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = ERC20EthereumCoins[this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl(address) {
    return this._etherscanUrl() + `/token/${this.tokenAddress}?a=${address}`;
  }

  static createToken(coinCode) {
    if (!ERC20EthereumCoins[coinCode]) throw new Error('Unknown ERC20Ethereum token');

    class ERC20EthereumToken extends ERC20EthereumHelper {}

    ERC20EthereumToken.prototype.coinCode = coinCode;
    ERC20EthereumToken.code = coinCode;
    ERC20EthereumToken.isToken = true;
    ERC20EthereumToken.decimals = ERC20EthereumCoins[coinCode].decimals;

    return ERC20EthereumToken;
  }
}

module.exports = ERC20EthereumHelper;
