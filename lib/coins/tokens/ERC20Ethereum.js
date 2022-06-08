const coins = require('./coins.json');
const EthereumHelper = require('../ethereum');

const COIN = 'ETH';
class ERC20EthereumHelper extends EthereumHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = coins[COIN][this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl(address) {
    return this._etherscanUrl() + `/token/${this.tokenAddress}?a=${address}`;
  }

  static createToken(tokenCode) {
    if (!coins[COIN][tokenCode]) throw new Error('Unknown ERC20Ethereum token');

    class ERC20EthereumToken extends ERC20EthereumHelper {}

    ERC20EthereumToken.prototype.coinCode = tokenCode;
    ERC20EthereumToken.code = tokenCode;
    ERC20EthereumToken.isToken = true;
    ERC20EthereumToken.decimals = coins[COIN][tokenCode].decimals;

    return ERC20EthereumToken;
  }
}

module.exports = ERC20EthereumHelper;
