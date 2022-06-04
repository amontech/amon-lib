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

module.exports = {
  EUR: EuroHelper,
  GBP: PoundSterlingHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  ETH: EthereumHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  MATIC: PolygonHelper,
  XRP: XrpHelper,
  BNB: BinanceHelper,
};
