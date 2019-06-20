const CoinHelper = require('./coin');
const iban = require('iban');

function addressValidator(network, address, { bic } = {}) {

  return address &&
    iban.isValid(address) &&
    typeof bic === 'string' && bic.length > 2;

}

class EuroHelper extends CoinHelper {

  getURIPrefix() {
    return 'euro';
  }

  validAddress(address, extra = {}) {

    return addressValidator(this.opts.network, address, extra);

  }

}

EuroHelper.code = 'EUR';
EuroHelper.decimals = 2;

module.exports = EuroHelper;
