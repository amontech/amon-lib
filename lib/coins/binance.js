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
    switch (this.opts.network) {
      case 'mainnet':
        return `https://bscscan.com/address/${address}`;
      case 'testnet':
        return `https://testnet.bscscan.com/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch (this.opts.network) {
      case 'mainnet':
        return `https://bscscan.com/tx/${txId}`;
      case 'testnet':
        return `https://testnet.bscscan.com/tx/${txId}`;
      default:
        return null;
    }
  }
}

BitcoinHelper.code = 'BNB';
BitcoinHelper.decimals = 8;

module.exports = BitcoinHelper;
