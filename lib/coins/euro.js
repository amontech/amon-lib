const CoinHelper = require('./coin');
const iban = require('iban');
const countriesSepa = require('./countriesSepa');

function addressValidator(network, address) {

  const countrySepa = countriesSepa.find(countrySepa => address.startsWith(countrySepa.iban) );

  return address &&
    iban.isValid(address) &&
    countrySepa
    // && countrySepa.code === 'EUR'
    && address.indexOf(' ') === -1;

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
EuroHelper.decimals = 2;

module.exports = EuroHelper;
