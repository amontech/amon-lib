const CoinHelper = require('./coin');
const cs = require('coinstring');

function addressValidator(network, address) {

  if( (network === 'regtest' && /^R[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ||
    (network === 'testnet' && /^[mn2Q][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ||
    (network === 'mainnet' && (
      /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/.test(address) ||
        /^ltc[a-zA-HJ-NP-Z1-9]{60}$/.test(address)
    ) ) ){

    return true;

  }

  return false;

}

class LitecoinHelper extends CoinHelper {

  getURIPrefix() {
    return 'litecoin';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://live.blockcypher.com/ltc/address/${address}`;
      case 'testnet':
        return `https://chain.so/address/LTCTEST/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://live.blockcypher.com/ltc/tx/${txId}`;
      case 'testnet':
        return `https://chain.so/tx/LTCTEST/${txId}`;
      default:
        return null;
    }
  }

}

LitecoinHelper.code = 'LTC';
LitecoinHelper.COIN_DECIMALS = 8;

module.exports = LitecoinHelper;
