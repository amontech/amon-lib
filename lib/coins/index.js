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
const ERC20EthereumHelper = require('./tokens/ERC20Ethereum');
const BEP20Helper = require('./tokens/BEP20');
const ERC20PolygonHelper = require('./tokens/ERC20Polygon')

module.exports = {
  EUR: EuroHelper,
  GBP: PoundSterlingHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  _ETH: {
    ETH: EthereumHelper,
    AMN: ERC20EthereumHelper.createToken('AMN'),
    TUSD: ERC20EthereumHelper.createToken('TUSD'),
    USDC: ERC20EthereumHelper.createToken('USDC'),
    USDT: ERC20EthereumHelper.createToken('USDT'),
    MATIC: ERC20EthereumHelper.createToken('MATIC'),
    ERC: ERC20EthereumHelper.createToken('ERC'),
    DAI: ERC20EthereumHelper.createToken('DAI'),
    QASH: ERC20EthereumHelper.createToken('QASH'),
  },
  _BNB: {
    BNB: BinanceHelper,
    USDT: BEP20Helper.createToken('USDT'),
  },
  _MATIC: {
    MATIC: PolygonHelper,
    USDT: ERC20PolygonHelper.createToken('USDT'),
  },
  XRP: XrpHelper,
};
