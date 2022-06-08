const CoinHelper = require('./coin');
const validateAddress = require('../helpers/trxTools');

class TronHelper extends CoinHelper {
  getURIPrefix() {
    return 'tron';
  }

  async validAddress(address) {
    const isValidAddress = await validateAddress(address, this.opts.network);
    return isValidAddress;
  }

  _tronscanUrl() {
    let prefix = null;

    if (this.opts.network === 'testnet') {
      prefix = 'shasta.';
    } else if (this.opts.network === 'mainnet') {
      prefix = '';
    } else {
      return null;
    }
    return `https://${prefix}tronscan.org/#`;
  }

  addressExplorerUrl(address) {
    return this._tronscanUrl() + `/address/${address}`;
  }

  txExplorerUrl(txId) {
    return this._tronscanUrl() + `/tx/${txId}`;
  }
}

TronHelper.code = 'TRX';
TronHelper.decimals = 18;

module.exports = TronHelper;
