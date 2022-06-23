const TokenHelper = require('../../../../../lib/coins/tokens/token');
const ERC20EthereumHelper = require('../../../../../lib/coins/tokens/ERC20Ethereum');
const BEP20Helper = require('../../../../../lib/coins/tokens/BEP20');
const ERC20PolygonHelper = require('../../../../../lib/coins/tokens/ERC20Polygon');
const TRC20Helper = require('../../../../../lib/coins/tokens/TRC20');
const AmonLib = require('../../../../../lib');

describe('Token Helper', () => {
  before(() => {
    this.tokenHelper = TokenHelper;
    this.lib = new AmonLib();
  });

  it('Get Token - ERC20: { AMY, AMN, USDC, USDT, MATIC, ERC, DAI, QASH }', () => {
    const ERC20EthereumAMY = this.tokenHelper.getToken('ETH', 'AMY');
    expect(ERC20EthereumAMY.code).to.eq('AMY');
    expect(ERC20EthereumAMY.isToken).to.eq(true);
    expect(ERC20EthereumAMY.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_ETH_AMY']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumAMN = this.tokenHelper.getToken('ETH', 'AMN');
    expect(ERC20EthereumAMN.code).to.eq('AMN');
    expect(ERC20EthereumAMN.isToken).to.eq(true);
    expect(ERC20EthereumAMN.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_ETH_AMN']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumTUSD = this.tokenHelper.getToken('ETH', 'TUSD');
    expect(ERC20EthereumTUSD.code).to.eq('TUSD');
    expect(ERC20EthereumTUSD.isToken).to.eq(true);
    expect(ERC20EthereumTUSD.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_ETH_TUSD']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumUSDT = this.tokenHelper.getToken('ETH', 'USDT');
    expect(ERC20EthereumUSDT.code).to.eq('USDT');
    expect(ERC20EthereumUSDT.isToken).to.eq(true);
    expect(ERC20EthereumUSDT.decimals).to.eq(6);
    expect(this.lib.coinsInstances['_ETH_USDT']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumUSDC = this.tokenHelper.getToken('ETH', 'USDC');
    expect(ERC20EthereumUSDC.code).to.eq('USDC');
    expect(ERC20EthereumUSDC.isToken).to.eq(true);
    expect(ERC20EthereumUSDC.decimals).to.eq(6);
    expect(this.lib.coinsInstances['_ETH_USDC']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumMATIC = this.tokenHelper.getToken('ETH', 'MATIC');
    expect(ERC20EthereumMATIC.code).to.eq('MATIC');
    expect(ERC20EthereumMATIC.isToken).to.eq(true);
    expect(ERC20EthereumMATIC.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_ETH_MATIC']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumERC = this.tokenHelper.getToken('ETH', 'ERC');
    expect(ERC20EthereumERC.code).to.eq('ERC');
    expect(ERC20EthereumERC.isToken).to.eq(true);
    expect(ERC20EthereumERC.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_ETH_ERC']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumDAI = this.tokenHelper.getToken('ETH', 'DAI');
    expect(ERC20EthereumDAI.code).to.eq('DAI');
    expect(ERC20EthereumDAI.isToken).to.eq(true);
    expect(ERC20EthereumDAI.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_ETH_DAI']).to.be.an.instanceof(ERC20EthereumHelper);

    const ERC20EthereumQASH = this.tokenHelper.getToken('ETH', 'QASH');
    expect(ERC20EthereumQASH.code).to.eq('QASH');
    expect(ERC20EthereumQASH.isToken).to.eq(true);
    expect(ERC20EthereumQASH.decimals).to.eq(6);
    expect(this.lib.coinsInstances['_ETH_QASH']).to.be.an.instanceof(ERC20EthereumHelper);

    // ERC20 MATIC
    const ERC20PolygonUSDT = this.tokenHelper.getToken('MATIC', 'USDT');
    expect(ERC20PolygonUSDT.code).to.eq('USDT');
    expect(ERC20PolygonUSDT.isToken).to.eq(true);
    expect(ERC20PolygonUSDT.decimals).to.eq(6);
    expect(this.lib.coinsInstances['_MATIC_USDT']).to.be.an.instanceof(ERC20PolygonHelper);
  });

  it('Get Token - BEP20: { USDT }', () => {
    const BEP20USDT = this.tokenHelper.getToken('BNB', 'USDT');
    expect(BEP20USDT.code).to.eq('USDT');
    expect(BEP20USDT.isToken).to.eq(true);
    expect(BEP20USDT.decimals).to.eq(18);
    expect(this.lib.coinsInstances['_BNB_USDT']).to.be.an.instanceof(BEP20Helper);
  });

  it('Get Token - TRC20: { USDT, USDC }', () => {
    const TRC20USDT = this.tokenHelper.getToken('TRX', 'USDT');
    expect(TRC20USDT.code).to.eq('USDT');
    expect(TRC20USDT.isToken).to.eq(true);
    expect(TRC20USDT.decimals).to.eq(6);
    expect(this.lib.coinsInstances['_TRX_USDT']).to.be.an.instanceof(TRC20Helper);

    const TRC20USDC = this.tokenHelper.getToken('TRX', 'USDC');
    expect(TRC20USDC.code).to.eq('USDC');
    expect(TRC20USDC.isToken).to.eq(true);
    expect(TRC20USDC.decimals).to.eq(6);
    expect(this.lib.coinsInstances['_TRX_USDC']).to.be.an.instanceof(TRC20Helper);
  });
});
