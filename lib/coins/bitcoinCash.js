const CoinHelper = require('./coin');
const bchAddr = require('bchaddrjs');

function addressValidator(network, address) {

  if(bchAddr.isValidAddress(address) && (
    (network === 'regtest' && bchAddr.detectAddressNetwork(address) === bchAddr.Network.Testnet) ||
    (network === 'testnet' && bchAddr.detectAddressNetwork(address) === bchAddr.Network.Testnet) ||
    (network === 'mainnet' && bchAddr.detectAddressNetwork(address) === bchAddr.Network.Mainnet)
  ) ){

    return true;

  }

  return false;

}

class BitcoinCashHelper extends CoinHelper {

  getURIPrefix() {
    return 'bitcoincash';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://www.blockchain.com/bch/address/${address}`;
      case 'testnet':
        return `https://www.blockchain.com/bchtest/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://www.blockchain.com/bch/tx/${txId}`;
      case 'testnet':
        return `https://www.blockchain.com/bchtest/tx/${txId}`;
      default:
        return null;
    }
  }

}

BitcoinCashHelper.code = 'BCH';
BitcoinCashHelper.decimals = 8;

module.exports = BitcoinCashHelper;
