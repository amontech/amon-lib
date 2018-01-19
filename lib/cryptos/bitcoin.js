const cs = require('coinstring');

const mainnetVersion = 0x00;
const mainnetScriptVersion = 0x05;
const testnetVersion = 0x6F;
const testnetScriptVersion = 0xC4;

const testnetAddressValidator = cs.createValidator(testnetVersion);

const BitcoinHelper = {

  validAddress: testnetAddressValidator,

};

module.exports = BitcoinHelper;
