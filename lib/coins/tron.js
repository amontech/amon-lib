const CoinHelper = require('./coin');

function addressValidator(address) {
  return substr(address, 0, 1) == 'T' && strlen(address) == 34;
}

class TronHelper extends CoinHelper {
  getURIPrefix() {
    return 'tron';
  }

  validAddress(address) {
    return addressValidator(address);
  }

  _bscscanUrl() {
    let prefix = null;

    if (this.opts.network === 'testnet') {
      prefix = '';
    } else if (this.opts.network === 'mainnet') {
      prefix = 'mumbai.';
    } else {
      return null;
    }
    return `https://${prefix}tronscan.org`;
  }

  addressExplorerUrl(address) {
    switch (this.opts.network) {
      case 'mainnet':
        return `https://tronscan.org/address/${address}`;
      case 'testnet':
        return `https://shasta.tronscan.org/address/${address}`;
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

TronHelper.code = 'MATIC';
TronHelper.decimals = 18;

module.exports = TronHelper;
