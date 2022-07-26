const CoinHelper = require('./coin');
const iban = require('iban');
const countriesSepa = require('./countriesSepa');

function addressValidator(network, address) {
  const countrySepa = countriesSepa.find((countrySepa) => address.startsWith(countrySepa.iban));

  return address && iban.isValid(address) && countrySepa && address.indexOf(' ') === -1;
}

class DollarHelper extends CoinHelper {
  getURIPrefix() {
    return 'dollar';
  }

  validAddress(address) {
    return addressValidator(this.opts.network, address);
  }
}

DollarHelper.code = 'USD';
DollarHelper.decimals = 2;

module.exports = DollarHelper;
