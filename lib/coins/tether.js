const CoinHelper = require('./coin');
const EthTools = require('../helpers/ethTools');

function addressValidator(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return isChecksumAddress(address);
  }
}

class TetherHelper extends CoinHelper {
  getURIPrefix() {
    return 'tether';
  }

  validAddress(address) {
    return addressValidator(address);
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
        return `https://polygonscan.com/address/${txId}`;
      case 'testnet':
        return `https://mumbai.polygonscan.com/address/${txId}`;
      default:
        return null;
    }
  }
}
TetherHelper.code = 'USDT';
TetherHelper.decimals = 18;

module.exports = TetherHelper;
