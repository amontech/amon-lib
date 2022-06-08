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
const TokenHelper = require('./tokens/token');

module.exports = {
  EUR: EuroHelper,
  GBP: PoundSterlingHelper,
  BTC: BitcoinHelper,
  LTC: LitecoinHelper,
  BCH: BitcoinCashHelper,
  DASH: DashHelper,
  ZEC: ZcashHelper,
  XRP: XrpHelper,
  _ETH: {
    ETH: EthereumHelper,
    AMN: TokenHelper.getToken('ETH', 'AMN'),
    TUSD: TokenHelper.getToken('ETH', 'TUSD'),
    USDC: TokenHelper.getToken('ETH', 'USDC'),
    USDT: TokenHelper.getToken('ETH', 'USDT'),
    MATIC: TokenHelper.getToken('ETH', 'MATIC'),
    ERC: TokenHelper.getToken('ETH', 'ERC'),
    DAI: TokenHelper.getToken('ETH', 'DAI'),
    QASH: TokenHelper.getToken('ETH', 'QASH'),
  },
  _BNB: {
    BNB: BinanceHelper,
    USDT: TokenHelper.getToken('BNB', 'USDT'),
  },
  _MATIC: {
    MATIC: PolygonHelper,
    USDT: TokenHelper.getToken('MATIC', 'USDT'),
  },
  _TRX: {
    USDT: TokenHelper.getToken('TRX', 'USDT'),
    USDC: TokenHelper.getToken('TRX', 'USDC'),
  },
};
