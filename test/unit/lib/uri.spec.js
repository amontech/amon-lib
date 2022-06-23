const AmonLib = require('../../../lib');
const URI = require('../../../lib/uri');

const validBitcoinTestnet = 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe';
const validEthereumAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';

describe('URI', () => {
  beforeEach(() => {
    this.lib = new AmonLib({ network: 'testnet' });
    this.URI = this.lib.URI;
  });

  describe('class', () => {
    it('instanciate', () => {
      expect(this.URI).to.be.an.instanceof(URI);
      expect(this.URI.coins).to.eq(this.lib.coinsInstances);
    });

    it('stringify', () => {
      const data = {
        coinCode: 'BTC',
        address: validBitcoinTestnet,
        amount: '0.12',
      };
      const uri = this.URI.stringify(data);

      expect(uri).to.eq('bitcoin:mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe?amount=0.12');
    });

    describe('parse', () => {
      it('uri', () => {
        const str = `bitcoin:${validBitcoinTestnet}?amount=0.12`;
        const uri = this.URI.parse(str);

        expect(uri.address).to.eq(validBitcoinTestnet);
        expect(uri.amount).to.eq('0.12');
        expect(uri.coinCode).to.eq('BTC');
      });

      it('address', () => {
        const uri = this.URI.parse(validBitcoinTestnet);

        expect(uri.address).to.eq(validBitcoinTestnet);
        expect(uri.coinCode).to.eq('BTC');
        expect(uri.amount).not.to.exist;
      });

      it('invalid', () => {
        expect(this.URI.parse.bind(null, 'foiezjqfoiqjsf')).to.throw(Error);
      });
    });
  });

  describe('Statics', () => {
    describe('isURI', () => {
      it('oui', () => {
        expect(this.URI.isURI('bitcoin:ouhzguhfsd')).to.be.true;
        expect(this.URI.isURI('bitcoin:ouhzguhfsd?amount=0.12')).to.be.true;
        expect(this.URI.isURI('bitcoin:ouhzguhfsd?amount=0.12&momo=coucou')).to.be.true;
        expect(this.URI.isURI('ethereum:ouhzguhfsd?amount=0.12&momo=coucou')).to.be.true;
      });

      it('non', () => {
        expect(this.URI.isURI('ouhzguhfsd')).to.be.false;
        expect(this.URI.isURI('uhzguhfsd?amount=0.12')).to.be.false;
        expect(this.URI.isURI('bitcoin:?amount=0.12&momo=coucou')).to.be.false;
        expect(this.URI.isURI('bitcoin:')).to.be.false;
      });
    });

    describe('isAddress', () => {
      it('oui', () => {
        expect(this.URI.isAddress(validBitcoinTestnet)).to.be.true;
      });

      it('non', () => {
        expect(this.URI.isAddress('oihfzeou')).to.be.false;
      });
    });

    describe('getCoinFromPrefix', () => {
      it('BTC', () => {
        const coin = this.URI.getCoinFromPrefix('bitcoin');

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('BTC');
      });

      it('ETH', () => {
        const coin = this.URI.getCoinFromPrefix('ethereum');

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('ETH');
      });

      it('AMY', () => {
        const coin = this.URI.getCoinFromPrefix('erc20');

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('AMY');
      });

      it('unknown', () => {
        const coin = this.URI.getCoinFromPrefix('poilodo');

        expect(coin).not.to.exist;
      });
    });

    describe('getCoinFromAddress', () => {
      it('BTC', () => {
        const coin = this.URI.getCoinFromAddress(validBitcoinTestnet);

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('BTC');
      });

      it('ETH', () => {
        const coin = this.URI.getCoinFromAddress(validEthereumAddress);

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('ETH');
      });

      it('unknown', () => {
        const coin = this.URI.getCoinFromAddress('poilodo');

        expect(coin).not.to.exist;
      });
    });

    describe('getCoinFromCode', () => {
      it('BTC', () => {
        const coin = this.URI.getCoinFromCode('BTC');

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('BTC');
      });

      it('ETH', () => {
        const coin = this.URI.getCoinFromCode('ETH');

        expect(coin).to.exist;
        expect(coin.constructor.code).to.eq('ETH');
      });

      it('unknown', () => {
        const coin = this.URI.getCoinFromCode('poilodo');

        expect(coin).not.to.exist;
      });
    });

    describe('validAddress', () => {
      it('BTC', () => {
        const coin = this.URI.getCoinFromCode('BTC');

        expect(coin.validAddress(validBitcoinTestnet)).to.be.true;
        expect(coin.validAddress('foehzfoih')).to.be.false;
      });

      it('ETH', () => {
        const coin = this.URI.getCoinFromCode('ETH');

        expect(coin.validAddress(validEthereumAddress)).to.be.true;
        expect(coin.validAddress('foehzfoih')).to.be.false;
      });
    });
  });
});
