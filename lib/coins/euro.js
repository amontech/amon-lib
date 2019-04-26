const CoinHelper = require('./coin');
const iban = require('iban');

function addressValidator(network, address) {

  return iban.isValid(address);

}

class EuroHelper extends CoinHelper {

  getURIPrefix() {
    return 'euro';
  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

}

EuroHelper.code = 'EUR';
EuroHelper.COIN_DECIMALS = 2;

module.exports = EuroHelper;
