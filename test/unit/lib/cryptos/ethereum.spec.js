const EthereumHelper = require('../../../../lib/cryptos/ethereum');

const validEthereumAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';
const invalidEthereumAddress = '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d';

describe('EthereumHelper', () => {

  describe('validAddress', () => {

    it('valid', () => {

      expect(EthereumHelper.validAddress(validEthereumAddress)).to.be.true;

    });

    it('invalid', () => {

      expect(EthereumHelper.validAddress(invalidEthereumAddress) ).to.be.false;

    });

  });

  describe('compareAddress', () => {

    it('compare simple', () => {

      expect(EthereumHelper.compareAddress(validEthereumAddress, validEthereumAddress) ).to.be.true;

    });

    it('compare different case', () => {

      const lowerCaseAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';
      expect(EthereumHelper.compareAddress(validEthereumAddress, lowerCaseAddress) ).to.be.true;

    });

    it('compare invalid', () => {

      const otherAddress = '0xc1912fee45d61c87cd5ea59dae31190fffff232d';
      expect(EthereumHelper.compareAddress(validEthereumAddress, otherAddress) ).to.be.false;

    });

  });

});