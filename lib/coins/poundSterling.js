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

class PoundSterlingHelper extends CoinHelper {

  getURIPrefix() {
    return 'poundsterling';
  }

  parseIBAN(address){

    return {
      accountNumber: address.slice(-8),
      sortCode: address.slice(address.length - 14, -8)
    };

  }

  validAddress(address) {

    return addressValidator(this.opts.network, address);

  }

}

PoundSterlingHelper.code = 'GBP';
PoundSterlingHelper.decimals = 2;

module.exports = PoundSterlingHelper;
