const EuroHelper = require('./euro');
const BitcoinHelper = require('./bitcoin');
const LitecoinHelper = require('./litecoin');
const BitcoinCashHelper = require('./bitcoinCash');
const EthereumHelper = require('./ethereum');
const DashHelper = require('./dash');
const ZcashHelper = require('./zcash');
const ERC20Helper = require('./ERC20');

module.exports = {
  EUR: EuroHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  ETH: EthereumHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  AMN: ERC20Helper.createToken('AMN'),
  TUSD: ERC20Helper.createToken('TUSD'),
};
