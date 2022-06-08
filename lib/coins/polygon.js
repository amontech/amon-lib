const CoinHelper = require('./coin');
const EthTools = require('../helpers/ethTools');
class PolygonHelper extends CoinHelper {
  getURIPrefix() {
    return 'polygon';
  }

  validAddress(address) {
    return EthTools.isAddress(address);
  }

  _polygonscanUrl() {
    let prefix = null;

    if (this.opts.network === 'testnet') {
      prefix = 'mumbai.';
    } else if (this.opts.network === 'mainnet') {
      prefix = '';
    } else {
      return null;
    }
    return `https://${prefix}polygonscan.com`;
  }

  addressExplorerUrl(address) {
    return this._polygonscanUrl() + `/address/${address}`;
  }

  txExplorerUrl(txId) {
    return this._polygonscanUrl() + `/tx/${txId}`;
  }
}

PolygonHelper.code = 'MATIC';
PolygonHelper.decimals = 18;

module.exports = PolygonHelper;
