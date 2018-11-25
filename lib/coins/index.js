const BitcoinHelper = require('./bitcoin');
const BitcoinCashHelper = require('./bitcoinCash');
const EthereumHelper = require('./ethereum');
const ERC20Helper = require('./ERC20');

module.exports = {
  BTC: BitcoinHelper,
  BCH: BitcoinCashHelper,
  ETH: EthereumHelper,
  AMN: ERC20Helper.createToken('AMN'),
};
