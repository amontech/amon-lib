const ERC20PolygonCoins = require('./ERC20PolygonCoins.json');
const PolygonHelper = require('../polygon');

class ERC20PolygonHelper extends PolygonHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = ERC20PolygonCoins[this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl() {
    return this._polygonscanUrl() + `/token/${this.tokenAddress}`;
  }

  static createToken(coinCode) {
    if (!ERC20PolygonCoins[coinCode]) throw new Error('Unknown ERC20Polygon token');

    class ERC20Polygon extends ERC20PolygonHelper {}

    ERC20Polygon.prototype.coinCode = coinCode;
    ERC20Polygon.code = coinCode;
    ERC20Polygon.isToken = true;
    ERC20Polygon.decimals = ERC20PolygonCoins[coinCode].decimals;

    return ERC20Polygon;
  }
}

module.exports = ERC20PolygonHelper;
