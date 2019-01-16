const BitcoinHelper = require('./bitcoin');
const LitecoinHelper = require('./litecoin');
const BitcoinCashHelper = require('./bitcoinCash');
const EthereumHelper = require('./ethereum');
const ERC20Helper = require('./ERC20');

module.exports = {
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  ETH: EthereumHelper,
  AMN: ERC20Helper.createToken('AMN'),
  TUSD: ERC20Helper.createToken('TUSD'),
};
