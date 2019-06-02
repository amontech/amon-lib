const CoinHelper = require('./coin');

function addressValidator(network, address) {

  if( (network === 'testnet' && /^[1-9][1-9A-HJ-NP-Za-km-z]{33}/g.test(address) ) ||
    (network === 'mainnet' && /^[1-9A-HJ-NP-Za-km-z]{33}/g.test(address) ) ){

    return true;

  }

  return false;

}

class DashHelper extends CoinHelper {

  getURIPrefix() {
    return 'dash';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://live.blockcypher.com/dash/address/${address}`;
      case 'testnet':
        return `https://testnet-insight.dashevo.org/insight/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://live.blockcypher.com/dash/tx/${txId}`;
      case 'testnet':
        return `https://testnet-insight.dashevo.org/insight/tx/${txId}`;
      default:
        return null;
    }
  }

}

DashHelper.code = 'DASH';
DashHelper.COIN_DECIMALS = 8;

module.exports = DashHelper;
