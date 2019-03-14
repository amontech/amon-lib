const AmonLib = require('../../../../lib');

const testData = {
  'BTC': {
    testnet: {
      validAddress: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
      invalidAddress: '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9',
      addressExplorer: 'https://www.blocktrail.com/tBTC/address/addr',
      txExplorer: 'https://www.blocktrail.com/tBTC/tx/tx',
    },
    mainnet: {
      validAddress: '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9',
      invalidAddress: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
      addressExplorer: 'https://live.blockcypher.com/btc/address/addr',
      txExplorer: 'https://live.blockcypher.com/btc/tx/tx',
    },
  },
  'BCH': {
    testnet: {
      validAddress: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
      invalidAddress: '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9',
      addressExplorer: 'https://www.blocktrail.com/tBCC/address/addr',
      txExplorer: 'https://www.blocktrail.com/tBCC/tx/tx',
    },
    mainnet: {
      validAddress: '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9',
      invalidAddress: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
      addressExplorer: 'https://live.blockcypher.com/bch/address/addr',
      txExplorer: 'https://live.blockcypher.com/bch/tx/tx',
    },
  },
  'LTC': {
    testnet: {
      validAddress: '2MzuHFTNqZZwPaxPv5cg3jkes28V3H1JTTY',
      invalidAddress: '1FJ2PMM75HRh63TmoYLe6Wd9apxNK3aem9',
      addressExplorer: 'https://chain.so/address/LTCTEST/addr',
      txExplorer: 'https://chain.so/tx/LTCTEST/tx',
    },
    mainnet: {
      validAddress: 'LWSygPfS6FEiDqdj2xmVF8CSZJREo4LbKd',
      invalidAddress: 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe',
      addressExplorer: 'https://live.blockcypher.com/ltc/address/addr',
      txExplorer: 'https://live.blockcypher.com/ltc/tx/tx',
    },
  },
  'ETH': {
    testnet: {
      validAddress: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://kovan.etherscan.io/address/addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://etherscan.io/address/addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  'AMN': {
    testnet: {
      validAddress: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://kovan.etherscan.io/token/0x5f74dfd905a1d4af90a6d9fc137d6ff97c5d7b48?a=addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://etherscan.io/token/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c?a=addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  'DASH': {
    testnet: {
      validAddress: '8ncpb32xr4qndKwMjAKtiJXYib2d28ZMku',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://testnet-insight.dashevo.org/insight/address/addr',
      txExplorer: 'https://testnet-insight.dashevo.org/insight/tx/tx',
    },
    mainnet: {
      validAddress: 'XtvquBScqXx4iBhD8oxYc9cocCkWg9GvQZ',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://live.blockcypher.com/dash/address/addr',
      txExplorer: 'https://live.blockcypher.com/dash/tx/tx',
    },
  },
  'ZEC': {
    testnet: {
      validAddress: 't2FyTsLjjdm4jeVwir4xzj7FAkUidbr1b4R',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://explorer.testnet.z.cash/address/addr',
      txExplorer: 'https://explorer.testnet.z.cash/tx/tx',
    },
    mainnet: {
      validAddress: 't1aZvxRLCGVeMPFXvqfnBgHVEbi4c6g8MVa',
      invalidAddress: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d',
      addressExplorer: 'https://zcash.blockexplorer.com/address/addr',
      txExplorer: 'https://zcash.blockexplorer.com/tx/tx',
    },
  },
};

describe('AllCoins tester', () => {


  const testCoin = (network) => (coinCode) => {

    const lib = new AmonLib({ network });
    const coinTestData = testData[coinCode][network];

    describe(`${coinCode} (${network})`, () => {

      before(() => {

        this.coin = lib.coins(coinCode);

      });

      describe('validAddress', () => {

        it('valid', () => {

          expect(this.coin.validAddress(coinTestData.validAddress)).to.be.true;

        });

        it('invalid', () => {

          expect(this.coin.validAddress(coinTestData.invalidAddress)).to.be.false;

        });

      });

      describe('explorers', () => {

        it(`addressExplorerUrl`, () => {
          expect(this.coin.addressExplorerUrl('addr')).to.eq(coinTestData.addressExplorer);
        });

        it(`txExplorerUrl`, () => {
          expect(this.coin.txExplorerUrl('tx')).to.eq(coinTestData.txExplorer);
        });

      });

    });

  };

  Object.keys(testData).forEach(testCoin('mainnet'));
  Object.keys(testData).forEach(testCoin('testnet'));

});
