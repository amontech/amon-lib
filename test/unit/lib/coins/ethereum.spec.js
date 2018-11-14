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

});