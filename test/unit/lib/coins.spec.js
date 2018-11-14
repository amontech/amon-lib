const AmonLib = require('../../../lib');
const BTCCoin = require('../../../lib/coinHelpers/bitcoin');

describe('Coins', () => {

    it('get coin', async () => {
        const coinBTC = AmonLib.coins('BTC');
        expect(coinBTC).to.eq(BTCCoin);
    });

});