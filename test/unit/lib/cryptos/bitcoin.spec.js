const BitcoinHelper = require('../../../../lib/cryptos/bitcoin');

const validBitcoinRegtest = 'RP2aihaqqdZ7QgiYas2c1x2qnYN1tkD8Pt';
const validBitcoinTestnet = 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe';

describe('BitcoinHelper', () => {

  describe('validAddress', () => {

    it('valid', () => {

      expect(BitcoinHelper.validAddress(validBitcoinTestnet)).to.be.true;

    });

    it('invalid', () => {

      expect(BitcoinHelper.validAddress('fiezjfoiez')).to.be.false;

    });

  });

});