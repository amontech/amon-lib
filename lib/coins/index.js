const BitcoinHelper = require('./bitcoin');
const EthereumHelper = require('./ethereum');
const ERC20Helper = require('./ERC20');
// const StellarHelper = require('./stellar');

module.exports = {
  BTC: BitcoinHelper,
  ETH: EthereumHelper,
  AMN: ERC20Helper.createToken('AMN'),
};
