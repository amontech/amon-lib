const CoinHelper = require('./coin');
const EthTools = require('../helpers/ethTools');

class EthereumHelper extends CoinHelper {

  getURIPrefix() {
    return 'ethereum';
  }

  validAddress(address) {
    return EthTools.isAddress(address);
  }

  _etherscanUrl() {
    let prefix = null;

    if(this.opts.network === 'testnet') {
      prefix = 'kovan.';
    } else if(this.opts.network === 'mainnet') {
      prefix = '';
    } else {
      return null;
    }
    return `https://${prefix}etherscan.io`;
  }

  addressExplorerUrl(address) {
    return this._etherscanUrl() + `/address/${address}`;
  }

  txExplorerUrl(txId) {
    return this._etherscanUrl() + `/tx/${txId}`;
  }

}

EthereumHelper.code = 'ETH';
EthereumHelper.COIN_DECIMALS = 18;

module.exports = EthereumHelper;
