const CoinHelper = require('./coin');

function addressValidator(network, address) {

  if(/^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}/g.test(address) ){

    return true;

  }

  return false;

}

class XrpHelper extends CoinHelper {

  getURIPrefix() {
    return 'xrp';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://bithomp.com/explorer/${address}`;
      case 'testnet':
        return `https://test.bithomp.com/explorer/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://bithomp.com/explorer/${txId}`;
      case 'testnet':
        return `https://test.bithomp.com/explorer/${txId}`;
      default:
        return null;
    }
  }

}

XrpHelper.code = 'XRP';
XrpHelper.decimals = 6;

module.exports = XrpHelper;
