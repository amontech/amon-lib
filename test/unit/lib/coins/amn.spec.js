const { AMN } = require('../../../../lib/coins');

const validEthereumAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';
const invalidEthereumAddress = '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d';

describe('AMNHelper', () => {

    before(() => {
        this.amnHelper = new AMN();
    });

    describe('validAddress', () => {

    it('valid', () => {

      expect(this.amnHelper.validAddress(validEthereumAddress)).to.be.true;

    });

    it('invalid', () => {

      expect(this.amnHelper.validAddress(invalidEthereumAddress)).to.be.false;

    });

  });

  function addressExplorer(network, address, expectedUrl) {

    it(`addressExplorerUrl ${network}`, () => {
      const helper = new AMN({network});
      expect(helper.addressExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  addressExplorer('testnet', validEthereumAddress, 'https://kovan.etherscan.io/token/0x5f74dfd905a1d4af90a6d9fc137d6ff97c5d7b48?a='+validEthereumAddress);
  addressExplorer('mainnet', validEthereumAddress, 'https://etherscan.io/token/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c?a='+validEthereumAddress);

  function txExplorer(network, address, expectedUrl) {

    it(`txExplorerUrl ${network}`, () => {
      const helper = new AMN({network});
      expect(helper.txExplorerUrl(address)).to.eq(expectedUrl);
    });

  }

  txExplorer('testnet', validEthereumAddress, `https://kovan.etherscan.io/tx/${validEthereumAddress}`);
  txExplorer('mainnet', validEthereumAddress, 'https://etherscan.io/tx/'+validEthereumAddress);

});
