const ERC20Helper = require('../coins/ERC20');

const Utils = {
  getCoinsInstances(Coins, opts) {
    coinsInstances = Object.keys(Coins).reduce((acc, coinCode) => {
      acc[coinCode] = opts && opts.isToken ? new (ERC20Helper.createToken(coinCode))(opts) : new Coins[coinCode](opts);
      return acc;
    }, {});
    return coinsInstances;
  },
};

module.exports = Utils;
