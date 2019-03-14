const CoinHelper = require('./coin');

function addressValidator(network, address) {

  if( (network === 'testnet' && /^t[a-zA-Z0-9][a-zA-Z0-9]{33}$/g.test(address) ) ||
    (network === 'mainnet' && /^t[a-zA-Z0-9][a-zA-Z0-9]{33}$/g.test(address) ) ){

    return true;

  }

  return false;

}

class ZcashHelper extends CoinHelper {

  getURIPrefix() {
    return 'zec';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://zcash.blockexplorer.com/address/${address}`;
      case 'testnet':
        return `https://explorer.testnet.z.cash/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://zcash.blockexplorer.com/tx/${txId}`;
      case 'testnet':
        return `https://explorer.testnet.z.cash/tx/${txId}`;
      default:
        return null;
    }
  }

}

ZcashHelper.code = 'ZEC';
ZcashHelper.COIN_DECIMALS = 8;

module.exports = ZcashHelper;
