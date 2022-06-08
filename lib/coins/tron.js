const CoinHelper = require('./coin');

function addressValidator(address) {
  return address.substring(0, 1) == 'T' && address.length == 34;
}

class TronHelper extends CoinHelper {
  getURIPrefix() {
    return 'tron';
  }

  validAddress(address) {
    return addressValidator(address);
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
    switch (this.opts.network) {
      case 'mainnet':
        return `https://tronscan.org/#/address/${address}`;
      case 'testnet':
        return `https://shasta.tronscan.org/#/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch (this.opts.network) {
      case 'mainnet':
        return `https://tronscan.org/#/tx/${txId}`;
      case 'testnet':
        return `https://shasta.tronscan.org/#/tx/${txId}`;
      default:
        return null;
    }
  }
}

TronHelper.code = 'TRX';
TronHelper.decimals = 18;

module.exports = TronHelper;
