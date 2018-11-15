const EthereumHelper = require('../../../../lib/coins/ethereum');

const validEthereumAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';
const invalidEthereumAddress = '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d';

describe('EthereumHelper', () => {

    before(() => {
        this.ethereumHelper = new EthereumHelper();
    });

    describe('validAddress', () => {

    it('valid', () => {

      expect(this.ethereumHelper.validAddress(validEthereumAddress)).to.be.true;

    });

    it('invalid', () => {

      expect(this.ethereumHelper.validAddress(invalidEthereumAddress)).to.be.false;

    });

  });

  function addressExplorer(network, address, expectedUrl) {

    it(`addressExplorerUrl ${network}`, () => {
      const helper = new EthereumHelper({network});
      expect(helper.addressExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  addressExplorer('regtest', validEthereumAddress, null);
  addressExplorer('testnet', validEthereumAddress, `https://kovan.etherscan.io/address/${validEthereumAddress}`);
  addressExplorer('mainnet', validEthereumAddress, 'https://etherscan.io/address/'+validEthereumAddress);

  function txExplorer(network, address, expectedUrl) {

    it(`txExplorerUrl ${network}`, () => {
      const helper = new EthereumHelper({network});
      expect(helper.txExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  txExplorer('regtest', validEthereumAddress, null);
  txExplorer('testnet', validEthereumAddress, `https://kovan.etherscan.io/tx/${validEthereumAddress}`);
  txExplorer('mainnet', validEthereumAddress, 'https://etherscan.io/tx/'+validEthereumAddress);

});
