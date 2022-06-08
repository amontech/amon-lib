const coins = require('./coins.json');
const PolygonHelper = require('../polygon');

const COIN = 'MATIC';
class ERC20PolygonHelper extends PolygonHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = coins[COIN][this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl() {
    return this._polygonscanUrl() + `/token/${this.tokenAddress}`;
  }

  static createToken(tokenCode) {
    if (!coins[COIN][tokenCode]) throw new Error('Unknown ERC20Polygon token');

    class ERC20Polygon extends ERC20PolygonHelper {}

    ERC20Polygon.prototype.coinCode = tokenCode;
    ERC20Polygon.code = tokenCode;
    ERC20Polygon.isToken = true;
    ERC20Polygon.decimals = coins[COIN][tokenCode].decimals;

    return ERC20Polygon;
  }
}

module.exports = ERC20PolygonHelper;
