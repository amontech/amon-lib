const CoinHelper = require('./coin');

function addressValidator(network, address) {

  if( (network === 'regtest' && /^R[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ||
    (network === 'testnet' && /^[mn2][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ||
    (network === 'mainnet' && (
      /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ||
      /^bc[a-zA-HJ-NP-Z0-9]{60}$/.test(address) ||
      /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/.test(address)
    ) ) ){

    return true;

  }

  return false;

}

class BitcoinHelper extends CoinHelper {

  getURIPrefix() {
    return 'bitcoin';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://www.blockchain.com/btc/address/${address}`;
      case 'testnet':
        return `https://www.blockchain.com/btctest/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://www.blockchain.com/btc/tx/${txId}`;
      case 'testnet':
        return `https://www.blockchain.com/btctest/tx/${txId}`;
      default:
        return null;
    }
  }

}

BitcoinHelper.code = 'BTC';
BitcoinHelper.decimals = 8;

module.exports = BitcoinHelper;
