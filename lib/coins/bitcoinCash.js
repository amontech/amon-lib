const CoinHelper = require('./coin');
const cs = require('coinstring');

const mainnetVersion = 0x00;
const mainnetScriptVersion = 0x05;
const testnetVersion = 0x6F;
const testnetScriptVersion = 0xC4;

const mainnetAddressValidator = cs.createValidator(mainnetVersion);
//const testnetAddressValidator = cs.createValidator(testnetVersion);

function addressValidator(network, address) {

  if( (network === 'regtest' && /^R[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ||
    (network === 'testnet' && /^[mn2][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ||
    (network === 'mainnet' && /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ){

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
        return `https://live.blockcypher.com/bch/address/${address}`;
      case 'testnet':
        return `https://www.blocktrail.com/tBCC/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://live.blockcypher.com/bch/tx/${txId}`;
      case 'testnet':
        return `https://www.blocktrail.com/tBCC/tx/${txId}`;
      default:
        return null;
    }
  }

}

BitcoinCashHelper.code = 'BCH';

module.exports = BitcoinCashHelper;