const AmonLib = require('../../../lib');
const BinanceHelper = require('../../../lib/coins/binance');
const BitcoinHelper = require('../../../lib/coins/bitcoin');
const LitecoinHelper = require('../../../lib/coins/litecoin');
const BitcoinCashHelper = require('../../../lib/coins/bitcoinCash');
const EthereumHelper = require('../../../lib/coins/ethereum');
const DashHelper = require('../../../lib/coins/dash');
const ZcashHelper = require('../../../lib/coins/zcash');
const EuroHelper = require('../../../lib/coins/euro');
const PolygonHelper = require('../../../lib/coins/polygon');
const ERC20EthereumHelper = require('../../../lib/coins/tokens/ERC20Ethereum');

describe('module', () => {
  it('AmonLib class', () => {
    const lib = new AmonLib();
    expect(lib).to.exist;
    expect(lib.opts.network).to.eq('mainnet');
    expect(lib.coins).to.exist;
    expect(AmonLib.crypto).to.exist;
    expect(lib.crypto).to.exist;
    expect(lib.countries).to.exist;
    expect(lib.countries.length).to.eq(250);
    expect(lib.cardCountries).to.exist;
    expect(lib.cardCountries.length).to.eq(31);

    expect(lib.coinsInstances['BTC']).to.be.an.instanceof(BitcoinHelper);
    expect(lib.coinsInstances['BCH']).to.be.an.instanceof(BitcoinCashHelper);
    expect(lib.coinsInstances['LTC']).to.be.an.instanceof(LitecoinHelper);
    expect(lib.coinsInstances['DASH']).to.be.an.instanceof(DashHelper);
    expect(lib.coinsInstances['ZEC']).to.be.an.instanceof(ZcashHelper);

    expect(lib.coinsInstances['ETH']).to.be.an.instanceof(EthereumHelper);
    expect(lib.coinsInstances['_ETH_AMN'].constructor.name).to.eq('ERC20EthereumToken');
    expect(lib.coinsInstances['_ETH_AMY'].constructor.name).to.eq('ERC20EthereumToken');

    expect(lib.coinsInstances['EUR']).to.be.an.instanceof(EuroHelper);

    const libTestnet = new AmonLib({ network: 'testnet' });
    expect(libTestnet.opts.network).to.eq('testnet');

    const coinBTC = lib.coins('BTC');
    expect(coinBTC).to.be.an.instanceof(BitcoinHelper);
    expect(coinBTC.opts.network).to.eq('mainnet');

    const coinBCH = libTestnet.coins('BCH');
    expect(coinBCH).to.be.an.instanceof(BitcoinCashHelper);
    expect(coinBCH.opts.network).to.eq('testnet');

    const coinLTC = libTestnet.coins('LTC');
    expect(coinLTC).to.be.an.instanceof(LitecoinHelper);
    expect(coinLTC.opts.network).to.eq('testnet');

    const coinDASH = libTestnet.coins('DASH');
    expect(coinDASH).to.be.an.instanceof(DashHelper);
    expect(coinDASH.opts.network).to.eq('testnet');

    const coinZEC = libTestnet.coins('ZEC');
    expect(coinZEC).to.be.an.instanceof(ZcashHelper);
    expect(coinZEC.opts.network).to.eq('testnet');

    const coinETH = libTestnet.coins('ETH');
    expect(coinETH).to.be.an.instanceof(EthereumHelper);
    expect(coinETH.opts.network).to.eq('testnet');

    const coinEUR = libTestnet.coins('EUR');
    expect(coinEUR).to.be.an.instanceof(EuroHelper);
    expect(coinEUR.opts.network).to.eq('testnet');

    const coinBNB = libTestnet.coins('BNB');
    expect(coinBNB).to.be.an.instanceof(BinanceHelper);
    expect(coinBNB.opts.network).to.eq('testnet');

    const coinMATIC = libTestnet.coins('MATIC');
    expect(coinMATIC).to.be.an.instanceof(PolygonHelper);
    expect(coinMATIC.opts.network).to.eq('testnet');

    const coinETH_MATIC = libTestnet.coins('ETH', 'MATIC');
    expect(coinETH_MATIC).to.be.an.instanceof(ERC20EthereumHelper);
    expect(coinETH_MATIC.opts.network).to.eq('testnet');

    const coinETH_AMN = libTestnet.coins('ETH', 'AMN');
    expect(coinETH_AMN).to.be.an.instanceof(ERC20EthereumHelper);
    expect(coinETH_AMN.opts.network).to.eq('testnet');

    const coinETH_AMY = libTestnet.coins('ETH', 'AMY');
    expect(coinETH_AMY).to.be.an.instanceof(ERC20EthereumHelper);
    expect(coinETH_AMY.opts.network).to.eq('testnet');

    const coinETH_TUSD = libTestnet.coins('ETH', 'TUSD');
    expect(coinETH_TUSD).to.be.an.instanceof(ERC20EthereumHelper);
    expect(coinETH_TUSD.opts.network).to.eq('testnet');

    libTestnet.addToken({
      coinCode: 'ETH',
      tokenCode: 'ERC',
      decimals: 2,
      testnetAddress: '0xA',
      mainnetAddress: '0xB',
    });

    const customERC20 = libTestnet.coins('ETH', 'ERC');

    expect(customERC20.constructor.decimals).to.eq(2);
    expect(customERC20.addressExplorerUrl('tx')).to.eq('https://kovan.etherscan.io/token/0xA?a=tx');
  });

  it('AmonLib class addToken', () => {
    const amonLib = new AmonLib({ network: 'mainnet' });
    amonLib.addToken({
      coinCode: 'ETH',
      tokenCode: 'ERC',
      decimals: 0,
      testnetAddress: '0x945ac907cf021a6bcd07852bb3b8c087051706a9',
      mainnetAddress: '0x0000000000000000000000000000000000000000',
    });

    const eth = amonLib.coins('ETH');
    expect(eth.constructor.decimals).to.eq(18);
    expect(eth.amountUnitToFloat('-1000000000')).to.eq('-0.000000001');

    const erc = amonLib.coins('ETH', 'ERC');
    expect(erc.constructor.decimals).to.eq(0);
    expect(erc.amountUnitToFloat('-1000000000')).to.eq('-1000000000');
  });

  it('Have error codes', () => {
    expect(AmonLib.prototype.errorCodes).to.exist;
    expect(AmonLib.prototype.errorCodes.api).to.exist;
    expect(AmonLib.prototype.errorCodes.api.length).to.be.eq(63);
    expect(
      AmonLib.prototype.errorCodes.api.find(
        (error) => !(error.code && error.description && Number.isInteger(error.status))
      )
    ).not.to.be.exist;
  });

  it('Have currencies', () => {
    expect(AmonLib.prototype.currencies).to.exist;
    expect(AmonLib.prototype.currencies.length).to.be.eq(436);
  });

  it('Have countries', () => {
    expect(AmonLib.prototype.countries).to.exist;
    expect(AmonLib.prototype.countries.length).to.be.eq(250);
  });
});
