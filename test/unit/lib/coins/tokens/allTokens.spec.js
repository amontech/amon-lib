const AmonLib = require('../../../../../lib');

const testData = {
  _ETH_AMN: {
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
  _ETH_TUSD: {
    testnet: {
      validAddress: ['0x0000000000000000000000000000000000000000'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://kovan.etherscan.io/token/0x0000000000000000000000000000000000000000?a=addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: ['0x0000000000085d4780B73119b644AE5ecd22b376'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://etherscan.io/token/0x0000000000085d4780B73119b644AE5ecd22b376?a=addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  _ETH_ERC: {
    testnet: {
      validAddress: ['0x945ac907cf021a6bcd07852bb3b8c087051706a9'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://kovan.etherscan.io/token/0x945ac907cf021a6bcd07852bb3b8c087051706a9?a=addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: ['0x0000000000000000000000000000000000000000'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://etherscan.io/token/0x0000000000000000000000000000000000000000?a=addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  _ETH_MATIC: {
    testnet: {
      validAddress: ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://kovan.etherscan.io/token/0x0000000000000000000000000000000000000000?a=addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0?a=addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  _ETH_USDT: {
    testnet: {
      validAddress: ['0x0000000000000000000000000000000000000000'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://kovan.etherscan.io/token/0x0000000000000000000000000000000000000000?a=addr',
      txExplorer: 'https://kovan.etherscan.io/tx/tx',
    },
    mainnet: {
      validAddress: ['0xdac17f958d2ee523a2206206994597c13d831ec7'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a=addr',
      txExplorer: 'https://etherscan.io/tx/tx',
    },
  },
  _BNB_USDT: {
    testnet: {
      validAddress: ['0x377533d0e68a22cf180205e9c9ed980f74bc5050'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://testnet.bscscan.com/token/0x377533d0e68a22cf180205e9c9ed980f74bc5050?a=addr',
      txExplorer: 'https://testnet.bscscan.com/tx/tx',
    },
    mainnet: {
      validAddress: ['0x55d398326f99059ff775485246999027b3197955'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955?a=addr',
      txExplorer: 'https://bscscan.com/tx/tx',
    },
  },
  _MATIC_USDT: {
    testnet: {
      validAddress: ['0x0000000000000000000000000000000000000000'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://mumbai.polygonscan.com/token/0x0000000000000000000000000000000000000000',
      txExplorer: 'https://mumbai.polygonscan.com/tx/tx',
    },
    mainnet: {
      validAddress: ['0xc2132d05d31c914a87c6611c10748aeb04b58e8f'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      txExplorer: 'https://polygonscan.com/tx/tx',
    },
  },
  _TRX_USDT: {
    testnet: {
      validAddress: ['TWjh6QpNCgJvWytkHzUUsR5bLBmm3MvwTu'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://shasta.tronscan.org/#/token20/TWjh6QpNCgJvWytkHzUUsR5bLBmm3MvwTu?a=addr',
      txExplorer: 'https://shasta.tronscan.org/#/tx/tx',
    },
    mainnet: {
      validAddress: ['TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'],
      invalidAddress: ['0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'],
      addressExplorer: 'https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t?a=addr',
      txExplorer: 'https://tronscan.org/#/tx/tx',
    },
  },
};

describe('AllCoins tester - coins', () => {
  const testCoin = (network) => (tokenCode) => {
    const lib = new AmonLib({ network });
    const tokensTestData = testData[tokenCode][network];

    describe(`${tokenCode} (${network})`, () => {
      beforeEach(() => {
        this.coin = lib.coins(tokenCode);
      });

      describe('validate Address', () => {
        it('valid', () => {
          tokensTestData.validAddress.forEach((validAddress) => {
            expect(this.coin.validAddress(validAddress)).to.be.true;
          });
        });

        it('invalid', () => {
          tokensTestData.invalidAddress.forEach((invalidAddress) => {
            expect(this.coin.validAddress(invalidAddress)).to.be.false;
          });
        });
      });

      describe('explorers', () => {
        it(`addressExplorerUrl`, () => {
          expect(this.coin.addressExplorerUrl('addr')).to.eq(tokensTestData.addressExplorer);
        });

        it(`txExplorerUrl`, () => {
          expect(this.coin.txExplorerUrl('tx')).to.eq(tokensTestData.txExplorer);
        });
      });
    });
  };

  Object.keys(testData).forEach(testCoin('mainnet'));
  Object.keys(testData).forEach(testCoin('testnet'));
});
