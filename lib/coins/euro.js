const CoinHelper = require('./coin');
const iban = require('iban');
const countriesSepa = require('./countriesSepa');

function addressValidator(network, address, { bic } = {}) {

  const countrySepa = countriesSepa.find(countrySepa => address.startsWith(countrySepa.iban) );

  return address &&
    iban.isValid(address) &&
    countrySepa && countrySepa.code === 'EUR'
    && typeof bic === 'string' && bic.length > 2;

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
