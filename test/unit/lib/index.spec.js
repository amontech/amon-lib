const AmonLib = require('../../../lib');
const BitcoinHelper = require('../../../lib/coins/bitcoin');
const LitecoinHelper = require('../../../lib/coins/litecoin');
const BitcoinCashHelper = require('../../../lib/coins/bitcoinCash');
const EthereumHelper = require('../../../lib/coins/ethereum');

describe('module', () => {

  it('AmonLib class', () => {

    const lib = new AmonLib();
    expect(lib).to.exist;
    expect(lib.opts.network).to.eq('mainnet');
    expect(lib.coins).to.exist;
    expect(AmonLib.crypto).to.exist;
    expect(lib.crypto).to.exist;

    expect(lib.coinsInstances['BTC']).to.be.an.instanceof(BitcoinHelper);
    expect(lib.coinsInstances['LTC']).to.be.an.instanceof(LitecoinHelper);
    expect(lib.coinsInstances['BCH']).to.be.an.instanceof(BitcoinCashHelper);
    expect(lib.coinsInstances['ETH']).to.be.an.instanceof(EthereumHelper);
    expect(lib.coinsInstances['AMN'].constructor.name).to.eq('ERC20Token');

    const coinBTC = lib.coins('BTC');
    expect(coinBTC).to.be.an.instanceof(BitcoinHelper);
    expect(coinBTC.opts.network).to.eq('mainnet');

    const libTestnet = new AmonLib({network: 'testnet'});
    expect(libTestnet.opts.network).to.eq('testnet');

    const coinETH = libTestnet.coins('ETH');
    expect(coinETH).to.be.an.instanceof(EthereumHelper);
    expect(coinETH.opts.network).to.eq('testnet');

    libTestnet.addERC20({
      code: 'ERC',
      decimals: 2,
      testnetAddress: '0xA',
      mainnetAddress: '0xB',
    });

    const customERC20 = libTestnet.coins('ERC');

    expect(customERC20.constructor.COIN_DECIMALS).to.eq(2);
    expect(customERC20.addressExplorerUrl('tx')).to.eq('https://kovan.etherscan.io/token/0xA?a=tx');

  });

});
