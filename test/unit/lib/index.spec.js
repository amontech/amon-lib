const AmonLib = require('../../../lib');
const BitcoinHelper = require('../../../lib/coins/bitcoin');
const EthereumHelper = require('../../../lib/coins/ethereum');

describe('module', () => {

    it('AmonLib class', () => {

        const lib = new AmonLib();
        expect(lib).to.exist;
        expect(lib.opts.network).to.eq('mainnet');
        expect(lib.coins).to.exist;
        expect(AmonLib.crypto).to.exist;
        expect(lib.crypto).to.exist;

        const coinBTC = lib.coins('BTC');
        expect(coinBTC).to.be.an.instanceof(BitcoinHelper);
        expect(coinBTC.opts.network).to.eq('mainnet');

        const libTestnet = new AmonLib({network: 'testnet'});
        expect(libTestnet.opts.network).to.eq('testnet');

        const coinETH = libTestnet.coins('ETH');
        expect(coinETH).to.be.an.instanceof(EthereumHelper);
        expect(coinETH.opts.network).to.eq('testnet');

    });

});