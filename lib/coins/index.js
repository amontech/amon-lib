const EuroHelper = require('./euro');
const PoundSterlingHelper = require('./poundSterling');
const BinanceHelper = require('./binance');
const BitcoinHelper = require('./bitcoin');
const LitecoinHelper = require('./litecoin');
const BitcoinCashHelper = require('./bitcoinCash');
const EthereumHelper = require('./ethereum');
const DashHelper = require('./dash');
const ZcashHelper = require('./zcash');
const XrpHelper = require('./xrp');
const PolygonHelper = require('./polygon');
const ERC20Helper = require('./ERC20');

module.exports = {
  EUR: EuroHelper,
  GBP: PoundSterlingHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  ETH: EthereumHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  ETH_AMN: ERC20Helper.createToken('AMN'),
  ETH_TUSD: ERC20Helper.createToken('TUSD'),
  ETH_USDC: ERC20Helper.createToken('USDC'),
  ETH_USDT: ERC20Helper.createToken('USDT'),
  ETH_MATIC: ERC20Helper.createToken('MATIC'),
  ETH_ERC: ERC20Helper.createToken('ERC'),
  ETH_DAI: ERC20Helper.createToken('DAI'),
  ETH_QASH: ERC20Helper.createToken('QASH'),
  MATIC: PolygonHelper,
  XRP: XrpHelper,
  BNB: BinanceHelper,
};
