const ERC20Coins = require('./ERC20coins.json');
const EthereumHelper = require('./ethereum');

class ERC20Helper extends EthereumHelper {

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl(address) {
    const tokenAddress = ERC20Coins[this.coinCode][this.opts.network];
    return this.etherscanUrl() + `/token/${tokenAddress}?a=${address}`;
  }

  static createToken(coinCode) {
    class ERC20Token extends ERC20Helper {}
    ERC20Token.prototype.coinCode = coinCode;
    ERC20Token.code = coinCode;
    ERC20Token.isToken = true;

    return ERC20Token;
  }
}

module.exports = ERC20Helper;
