const EuroHelper = require('./euro');
const PoundSterlingHelper = require('./poundSterling');
const BitcoinHelper = require('./bitcoin');
const LitecoinHelper = require('./litecoin');
const BitcoinCashHelper = require('./bitcoinCash');
const EthereumHelper = require('./ethereum');
const DashHelper = require('./dash');
const ZcashHelper = require('./zcash');
const ERC20Helper = require('./ERC20');
const XrpHelper = require('./xrp');

module.exports = {
  EUR: EuroHelper,
  GBP: PoundSterlingHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  ETH: EthereumHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  AMN: ERC20Helper.createToken('AMN'),
  TUSD: ERC20Helper.createToken('TUSD'),
  USDC: ERC20Helper.createToken('USDC'),
  ERC: ERC20Helper.createToken('ERC'),
  DAI: ERC20Helper.createToken('DAI'),
  XRP: XrpHelper,
};
