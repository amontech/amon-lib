const CoinHelper = require('./coin');
const EthTools = require('../helpers/ethTools');

class BitcoinHelper extends CoinHelper {
  getURIPrefix() {
    return 'ethereum';
  }

  validAddress(address) {
    return EthTools.isAddress(address);
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
