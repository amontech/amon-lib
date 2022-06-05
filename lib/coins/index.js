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
  _ETH: {
    AMN: ERC20Helper.createToken('AMN'),
    TUSD: ERC20Helper.createToken('TUSD'),
    USDC: ERC20Helper.createToken('USDC'),
    USDT: ERC20Helper.createToken('USDT'),
    MATIC: ERC20Helper.createToken('MATIC'),
    ERC: ERC20Helper.createToken('ERC'),
    DAI: ERC20Helper.createToken('DAI'),
    QASH: ERC20Helper.createToken('QASH'),
  },
  MATIC: PolygonHelper,
  XRP: XrpHelper,
  BNB: BinanceHelper,
};
