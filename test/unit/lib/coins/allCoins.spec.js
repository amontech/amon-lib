const AmonLib = require('../../../../lib');

const testData = {
  'BTC': {
    testnet: {
      validAddress: ['mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe'],
      invalidAddress: ['1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9'],
      addressExplorer: 'https://www.blockchain.com/btctest/address/addr',
      txExplorer: 'https://www.blockchain.com/btctest/tx/tx',
    },
    mainnet: {
      validAddress: ['1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9', 'bc1q7kuc84wc59svmage6xdntnkuumcsu7xlgfzleq3g4ml6r73vy5ysghv0yp'],
      invalidAddress: ['mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe'],
      addressExplorer: 'https://www.blockchain.com/btc/address/addr',
      txExplorer: 'https://www.blockchain.com/btc/tx/tx',
    },
  },
  'BCH': {
    testnet: {
      validAddress: ['mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe', 'qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457'],
      invalidAddress: ['1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9', 'bitcoincash:qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk'],
      addressExplorer: 'https://www.blockchain.com/bchtest/address/addr',
      txExplorer: 'https://www.blockchain.com/bchtest/tx/tx',
    },
    mainnet: {
      validAddress: ['1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9', 'bitcoincash:qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk'],
      invalidAddress: ['mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe', 'qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457'],
      addressExplorer: 'https://www.blockchain.com/bch/address/addr',
      txExplorer: 'https://www.blockchain.com/bch/tx/tx',
    },
  },
  'LTC': {
    testnet: {
      validAddress: ['2MzuHFTNqZZwPaxPv5cg3jkes28V3H1JTTY'],
      invalidAddress: ['1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9'],
      addressExplorer: 'https://chain.so/address/LTCTEST/addr',
      txExplorer: 'https://chain.so/tx/LTCTEST/tx',
    },
    mainnet: {
      validAddress: ['LWSygPfS6FEiDqdj2xmVF8CSZJREo4LbKd', 'ltc1qwjd8wgqdl3c3u2hkzuwxsc9ttcza27z5e4jfedtpd8yme7em8nxqyru8cd'],
      invalidAddress: ['mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe'],
      addressExplorer: 'https://live.blockcypher.com/ltc/address/addr',
      txExplorer: 'https://live.blockcypher.com/ltc/tx/tx',
    },
  },
  'ETH': {
    testnet: {
      validAddress: ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://kovan.etherscan.io/address/addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://etherscan.io/address/addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  'AMN': {
    testnet: {
      validAddress: ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://kovan.etherscan.io/token/0x5f74dfd905a1d4af90a6d9fc137d6ff97c5d7b48?a=addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://etherscan.io/token/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c?a=addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  'DASH': {
    testnet: {
      validAddress: ['8ncpb32xr4qndKwMjAKtiJXYib2d28ZMku'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://testnet-insight.dashevo.org/insight/address/addr',
      txExplorer: 'https://testnet-insight.dashevo.org/insight/tx/tx',
    },
    mainnet: {
      validAddress: ['XtvquBScqXx4iBhD8oxYc9cocCkWg9GvQZ', '7oaa5TJFu8KFNgBLrpBNtE1Uh7VNa3oG9v'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://live.blockcypher.com/dash/address/addr',
      txExplorer: 'https://live.blockcypher.com/dash/tx/tx',
    },
  },
  'ZEC': {
    testnet: {
      validAddress: ['t2FyTsLjjdm4jeVwir4xzj7FAkUidbr1b4R'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://explorer.testnet.z.cash/address/addr',
      txExplorer: 'https://explorer.testnet.z.cash/tx/tx',
    },
    mainnet: {
      validAddress: ['t1aZvxRLCGVeMPFXvqfnBgHVEbi4c6g8MVa'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://zcash.blockexplorer.com/address/addr',
      txExplorer: 'https://zcash.blockexplorer.com/tx/tx',
    },
  },
  'EUR': {
    testnet: {
      validAddress: ['IT60X0542811101000000123456', 'GB41REVO00997023855033'],
      invalidAddress: ['LI89370400440532013000', 'IT 60X0 5428 1110 1000 0001 23456'],
    },
    mainnet: {
      validAddress: ['DE89370400440532013000'],
      invalidAddress: ['LI89370400440532013000', 'GB41 REVO0 0997 0238 55033'],
    },
  },
  'GBP': {
    testnet: {
      validAddress: ['IT60X0542811101000000123456', 'GB41REVO00997023855033'],
      invalidAddress: ['LI89370400440532013000', 'IT 60X0 5428 1110 1000 0001 23456'],
    },
    mainnet: {
      validAddress: ['DE89370400440532013000'],
      invalidAddress: ['LI89370400440532013000', 'GB41 REVO0 0997 0238 55033'],
    },
  },
  'XRP': {
    testnet: {
      validAddress: ['r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', 'r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=1', 'r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=123455'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://test.bithomp.com/explorer/addr',
      txExplorer: 'https://test.bithomp.com/explorer/tx',
    },
    mainnet: {
      validAddress: ['r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', 'r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=1', 'r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=123455'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://bithomp.com/explorer/addr',
      txExplorer: 'https://bithomp.com/explorer/tx',
    },
  },
};

describe('AllCoins tester', () => {

  const testCoin = (network) => (coinCode) => {

    const lib = new AmonLib({ network });
    const coinTestData = testData[coinCode][network];

    describe(`${coinCode} (${network})`, () => {

      beforeEach( () => {

        this.coin = lib.coins(coinCode);

      });

      describe('validate Address', () => {

        it('valid', () => {

          coinTestData.validAddress.forEach(validAddress => {

            expect(this.coin.validAddress(validAddress) ).to.be.true;

            if(coinCode === 'XRP'){

              const parsed = this.coin.parseTag(validAddress);

              expect(parsed.address).to.exist;

              expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
              expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', 'invalid-tag') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
              expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', '123455') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=123455');
              expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', '0') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=0');

              if(validAddress.includes('?dt=') ){

                expect(parsed.tag).to.not.be.undefined;

              } else {

                expect(parsed.tag).to.be.undefined;

              }

            }

          });

        });

        it('invalid', () => {

          coinTestData.invalidAddress.forEach(invalidAddress => {

            expect(this.coin.validAddress(invalidAddress) ).to.be.false;

          });

        });

      });

      describe('explorers', () => {

        it(`addressExplorerUrl`, () => {

          if(coinCode === 'EUR' || coinCode === 'GBP') {
            expect( () => this.coin.addressExplorerUrl('addr')).to.throw('not implemented');
          } else {
            expect(this.coin.addressExplorerUrl('addr')).to.eq(coinTestData.addressExplorer);
          }

        });

        it(`txExplorerUrl`, () => {

          if(coinCode === 'EUR' || coinCode === 'GBP') {
            expect( () => this.coin.txExplorerUrl('tx')).to.throw('not implemented');
          } else {
            expect(this.coin.txExplorerUrl('tx')).to.eq(coinTestData.txExplorer);
          }

        });

      });

    });

  };

  Object.keys(testData).forEach(testCoin('mainnet'));
  Object.keys(testData).forEach(testCoin('testnet'));

  describe('XRP', () => {

    beforeEach( () => {

      this.coinCode = 'XRP';
      const lib = new AmonLib({ network: 'mainnet' });

      this.coin = lib.coins(this.coinCode);

    });

    it('Should parse tag', () => {

      const parsedNoTag = this.coin.parseTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
      expect(parsedNoTag.address).to.exist;
      expect(parsedNoTag.tag).to.be.undefined;


      const parsedWithTag1 = this.coin.parseTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=1');
      expect(parsedWithTag1.address).to.exist;
      expect(parsedWithTag1.tag).to.be.eq('1');

      const parsedWithTag0 = this.coin.parseTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=0');
      expect(parsedWithTag0.address).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
      expect(parsedWithTag0.tag).to.be.eq('0');

      const parsedWithTagLong = this.coin.parseTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=12345');
      expect(parsedWithTagLong.address).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
      expect(parsedWithTagLong.tag).to.be.eq('12345');

      expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
      expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', 'invalid-tag') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ');
      expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', '123455') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=123455');
      expect(this.coin.formatTag('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ', '0') ).to.be.eq('r33dzSjAEr6Ficfd1fdeBTWmXvUSA3fJfQ?dt=0');

    });

  });

  describe('GBP', () => {

    beforeEach(() => {

      this.coinCode = 'GBP';
      const lib = new AmonLib({network: 'mainnet'});

      this.coin = lib.coins(this.coinCode);

    });

    it('Should parse IBAN to account number and sort code', () => {

      expect(this.coin.parseIBAN('DE89370400440532013000') ).to.be.deep.eq({
        accountNumber: '32013000',
        sortCode: '004405'
      });

    });

  });

});
