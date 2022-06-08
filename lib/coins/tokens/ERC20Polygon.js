const coins = require('./coins.json');
const PolygonHelper = require('../polygon');

class ERC20PolygonHelper extends PolygonHelper {
  constructor(opts) {
    super(opts);

    this.tokenAddress = coins['MATIC'][this.constructor.code][this.opts.network];
  }

  getURIPrefix() {
    return 'erc20';
  }

  addressExplorerUrl() {
    return this._polygonscanUrl() + `/token/${this.tokenAddress}`;
  }

  static createToken(coinCode) {
    if (!coins['MATIC'][coinCode]) throw new Error('Unknown ERC20Polygon token');

    class ERC20Polygon extends ERC20PolygonHelper {}

    ERC20Polygon.prototype.coinCode = coinCode;
    ERC20Polygon.code = coinCode;
    ERC20Polygon.isToken = true;
    ERC20Polygon.decimals = coins['MATIC'][coinCode].decimals;

    return ERC20Polygon;
  }
}

module.exports = ERC20PolygonHelper;
