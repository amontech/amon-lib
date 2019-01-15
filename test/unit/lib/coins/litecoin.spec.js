const BitcoinHelper = require('../../../../lib/coins/litecoin');

const validLiteCoinRegtest = 'RP2aihaqqdZ7QgiYas2c1x2qnYN1tkD8Pt';
const validLiteCoinTestnet = '2MzuHFTNqZZwPaxPv5cg3jkes28V3H1JTTY';
const validLiteCoinMainnet = 'LWSygPfS6FEiDqdj2xmVF8CSZJREo4LbKd';

describe('LiteCoinHelper', () => {

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

  validAddressNetwork('regtest', validLiteCoinRegtest, validLiteCoinTestnet);
  validAddressNetwork('testnet', validLiteCoinTestnet, validLiteCoinRegtest);
  validAddressNetwork('mainnet', validLiteCoinMainnet, validLiteCoinRegtest);


  function addressExplorer(network, address, expectedUrl) {

    it(`addressExplorerUrl ${network}`, () => {
      const helper = new BitcoinHelper({network});
      expect(helper.addressExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  addressExplorer('regtest', validLiteCoinRegtest, null);
  addressExplorer('testnet', validLiteCoinTestnet, `https://chain.so/address/LTCTEST/${validLiteCoinTestnet}`);
  addressExplorer('mainnet', validLiteCoinMainnet, 'https://live.blockcypher.com/ltc/address/'+validLiteCoinMainnet);

  function txExplorer(network, address, expectedUrl) {

    it(`txExplorerUrl ${network}`, () => {
      const helper = new BitcoinHelper({network});
      expect(helper.txExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  txExplorer('regtest', validLiteCoinRegtest, null);
  txExplorer('testnet', validLiteCoinTestnet, `https://chain.so/tx/LTCTEST/${validLiteCoinTestnet}`);
  txExplorer('mainnet', validLiteCoinMainnet, 'https://live.blockcypher.com/ltc/tx/'+validLiteCoinMainnet);

});
