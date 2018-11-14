const BitcoinHelper = require('./bitcoin');
const EthereumHelper = require('./ethereum');
// const StellarHelper = require('./stellar');

module.exports = {
  BTC: BitcoinHelper,
  ETH: EthereumHelper,
};