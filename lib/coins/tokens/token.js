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
  /**
   *  get token by coinCode, tokenCode
   *  @return instance of {token}Helper
   */

  static getToken(coinCode, tokenCode) {
    switch (coinCode) {
      case COINS.ETH:
        return ERC20EthereumHelper.createToken(tokenCode);
      case COINS.BNB:
        return BEP20Helper.createToken(tokenCode);
      case COINS.MATIC:
        return ERC20PolygonHelper.createToken(tokenCode);
      case COINS.TRX:
        return TRC20Helper.createToken(tokenCode);
      default:
        break;
    }
    return token;
  }
}

module.exports = TokenHelper;
