const BitcoinHelper = require('./bitcoin');
const EthereumHelper = require('./ethereum');
// const StellarHelper = require('./stellar');

module.exports = {
  bitcoin: BitcoinHelper,
  ethereum: EthereumHelper,
  // stellar: StellarHelper,
};