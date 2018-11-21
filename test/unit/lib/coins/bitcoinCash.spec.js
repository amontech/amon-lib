const BitcoinCashHelper = require('../../../../lib/coins/bitcoinCash');

const validBitcoinRegtest = 'RP2aihaqqdZ7QgiYas2c1x2qnYN1tkD8Pt';
const validBitcoinTestnet = 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe';
const validBitcoinMainnet = '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9';

describe('BitcoinCashHelper', () => {

  before(() => {
    this.bitcoincashHelper = new BitcoinCashHelper({network: 'testnet'});
  });

  it('opts', () => {
    expect(this.bitcoincashHelper.opts.network).to.eq('testnet');
  });

  function validAddressNetwork(network, address, otherNetworkAddress) {
    describe(`validAddress ${network}`, () => {

      beforeEach(() => {
        this.helper = new BitcoinCashHelper({network});
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


  function addressExplorer(network, address, expectedUrl) {

    it(`addressExplorerUrl ${network}`, () => {
      const helper = new BitcoinCashHelper({network});
      expect(helper.addressExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  addressExplorer('regtest', validBitcoinRegtest, null);
  addressExplorer('testnet', validBitcoinTestnet, `https://www.blocktrail.com/tBCC/address/${validBitcoinTestnet}`);
  addressExplorer('mainnet', validBitcoinMainnet, 'https://live.blockcypher.com/bch/address/'+validBitcoinMainnet);

  function txExplorer(network, address, expectedUrl) {

    it(`txExplorerUrl ${network}`, () => {
      const helper = new BitcoinCashHelper({network});
      expect(helper.txExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  txExplorer('regtest', validBitcoinRegtest, null);
  txExplorer('testnet', validBitcoinTestnet, `https://www.blocktrail.com/tBCC/tx/${validBitcoinTestnet}`);
  txExplorer('mainnet', validBitcoinMainnet, 'https://live.blockcypher.com/bch/tx/'+validBitcoinMainnet);

});
