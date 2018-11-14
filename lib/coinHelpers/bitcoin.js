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
        (network === 'main' && /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) ) ){

        return true;

    }

    return false;

}

const BitcoinHelper = {

  validAddress: (address) => {

    return addressValidator('testnet', address);

  },

};

module.exports = BitcoinHelper;
