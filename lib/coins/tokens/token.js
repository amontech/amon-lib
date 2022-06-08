const ERC20EthereumHelper = require('./ERC20Ethereum');
const BEP20Helper = require('./BEP20');
const ERC20PolygonHelper = require('./ERC20Polygon');
const TRC20Helper = require('./TRC20');

const COINS = {
  ETH: 'ETH',
  BNB: 'BNB',
  MATIC: 'MATIC',
  TRX: 'TRX',
};

class TokenHelper {
  constructor(opts = { network: 'mainnet' }) {
    this.opts = Object.assign(
      {
        network: 'mainnet',
      },
      opts
    );
  }

  /**
   *  get token by coinCode, tokenCode
   *  @return instance of TokenHelper
   */

  static getToken(coinCode, tokenCode) {
    let token;
    switch (coinCode) {
      case COINS.ETH:
        token = ERC20EthereumHelper.createToken(tokenCode);
        break;
      case COINS.BNB:
        token = BEP20Helper.createToken(tokenCode);
        break;
      case COINS.MATIC:
        token = ERC20PolygonHelper.createToken(tokenCode);
        break;
      case COINS.TRX:
        token = TRC20Helper.createToken(tokenCode);
        break;
      default:
        break;
    }
    return token;
  }
}

module.exports = TokenHelper;
