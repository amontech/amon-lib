const CoinHelper = require('./coin');
const EthTools = require('../helpers/ethTools');

class BitcoinHelper extends CoinHelper {
  getURIPrefix() {
    return 'ethereum';
  }

  validAddress(address) {
    return EthTools.isAddress(address);
  }

  _bscscanUrl() {
    let prefix = null;

    if (this.opts.network === 'testnet') {
      prefix = 'testnet.';
    } else if (this.opts.network === 'mainnet') {
      prefix = '';
    } else {
      return null;
    }
    return `https://${prefix}bscscan.com`;
  }

  addressExplorerUrl(address) {
    return this._bscscanUrl() + `/address/${address}`;
  }

  txExplorerUrl(txId) {
    return this._bscscanUrl() + `/tx/${txId}`;
  }
}

BitcoinHelper.code = 'BNB';
BitcoinHelper.decimals = 8;

module.exports = BitcoinHelper;
