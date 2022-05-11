const EuroHelper = require('./euro');
const PoundSterlingHelper = require('./poundSterling');
const BinanceHelper = require('./binance');
const BitcoinHelper = require('./bitcoin');
const LitecoinHelper = require('./litecoin');
const BitcoinCashHelper = require('./bitcoinCash');
const EthereumHelper = require('./ethereum');
const DashHelper = require('./dash');
const ZcashHelper = require('./zcash');
const ERC20Helper = require('./ERC20');
const XrpHelper = require('./xrp');
const PolygonHelper = require('./polygon');

module.exports = {
  EUR: EuroHelper,
  GBP: PoundSterlingHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  ETH: EthereumHelper,
  ETHAMN: ERC20Helper.createToken('AMN'),
  ETHTUSD: ERC20Helper.createToken('TUSD'),
  ETHUSDC: ERC20Helper.createToken('USDC'),
  ETHUSDT: ERC20Helper.createToken('USDT'),
  ETHMATIC: ERC20Helper.createToken('MATIC'),
  ETHERC: ERC20Helper.createToken('ERC'),
  ETHDAI: ERC20Helper.createToken('DAI'),
  ETHQASH: ERC20Helper.createToken('QASH'),
  XRP: XrpHelper,
  BNB: BinanceHelper,
  MATIC: PolygonHelper,
};
