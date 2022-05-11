const CoinHelper = require('./coin');
const EthTools = require('../helpers/ethTools');

class PolygonHelper extends CoinHelper {
  getURIPrefix() {
    return 'polygon';
  }

  validAddress(address) {
    return EthTools.isAddress(address);
  }

  addressExplorerUrl(address) {
    switch (this.opts.network) {
      case 'mainnet':
        return `https://polygonscan.com/address/${address}`;
      case 'testnet':
        return `https://mumbai.polygonscan.com/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch (this.opts.network) {
      case 'mainnet':
        return `https://polygonscan.com/tx/${txId}`;
      case 'testnet':
        return `https://mumbai.polygonscan.com/tx/${txId}`;
      default:
        return null;
    }
  }
}

PolygonHelper.code = 'MATIC';
PolygonHelper.decimals = 18;

module.exports = PolygonHelper;
