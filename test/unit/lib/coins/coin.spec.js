const CoinHelper = require('../../../../lib/coins/coin');
const BitoinHelper = require('../../../../lib/coins/bitcoin');

describe('CoinHelper', () => {
  before(() => {
    this.coinHelper = new CoinHelper({ network: 'testnet' });
  });

  it('opts', () => {
    expect(this.coinHelper.opts.network).to.eq('testnet');
  });

  it('not implemented', () => {
    expect(() => this.coinHelper.getURIPrefix()).to.throw(Error, 'not implemented');
    expect(() => this.coinHelper.validAddress('fezf')).to.throw(Error, 'not implemented');
    expect(() => this.coinHelper.addressExplorerUrl('cscz')).to.throw(Error, 'not implemented');
    expect(() => this.coinHelper.txExplorerUrl('cscz')).to.throw(Error, 'not implemented');
  });

  it('amount unit conversion', () => {
    const bitcoinHelper = new BitoinHelper({ network: 'testnet' });

    expect(bitcoinHelper.amountFloatToUnit('1')).to.eq('100000000');
    expect(bitcoinHelper.amountUnitToFloat('120000000')).to.eq('1.2');
  });
});
