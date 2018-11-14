const Coins = require('./coinHelpers');

module.exports = function(coinCode) {
    const coin = Coins[coinCode];

    if(!coin) {
        throw new Error('Unknown coin');
    }

    return coin;
};
