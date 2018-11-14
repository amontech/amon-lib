const BitcoinHelper = require('../../../../lib/coins/bitcoin');

const validBitcoinRegtest = 'RP2aihaqqdZ7QgiYas2c1x2qnYN1tkD8Pt';
const validBitcoinTestnet = 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe';
const validBitcoinMainnet = '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9';

describe('BitcoinHelper', () => {

  before(() => {
    this.bitcoinHelper = new BitcoinHelper({network: 'testnet'});
  });

  it('opts', () => {
    expect(this.bitcoinHelper.opts.network).to.eq('testnet');
  });

  function validAddressNetwork(network, address, otherNetworkAddress) {

    describe(`validAddress ${network}`, () => {

      beforeEach(() => {
        this.helper = new BitcoinHelper({network});
      });

      it('valid', () => {

        expect(this.helper.validAddress(address)).to.be.true;

      });

      it('invalid', () => {

        expect(this.helper.validAddress(otherNetworkAddress)).to.be.false;
        expect(this.helper.validAddress('fiezjfoiez')).to.be.false;

      });

    });

  }

  validAddressNetwork('regtest', validBitcoinRegtest, validBitcoinTestnet)
  validAddressNetwork('testnet', validBitcoinTestnet, validBitcoinRegtest)
  validAddressNetwork('mainnet', validBitcoinMainnet, validBitcoinRegtest)

});
