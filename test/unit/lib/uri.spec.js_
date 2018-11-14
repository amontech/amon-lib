const URI = require('../../../lib/uri');

const validBitcoinTestnet = 'mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe';
const validEthereumAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';

describe('URI', () => {

  describe('class', () => {

    it('instanciate', () => {

      const data = {
        coinCode: 'BTC',
        address: validBitcoinTestnet,
        amount: '0.12',
      };
      const uri = new URI(data);

      expect(uri.coinCode).to.eq(data.coinCode);
      expect(uri.address).to.eq(data.address);
      expect(uri.amount).to.eq(data.amount);

    });

    it('cannot instanciate without address', () => {

      const gen = () => new URI({});

      expect(gen).to.throw(Error);

    });

    it('get uri', () => {

      const data = {
        coinCode: 'BTC',
        address: validBitcoinTestnet,
        amount: '0.12',
      };
      const uri = new URI(data);

      expect(uri.toString()).to.eq('bitcoin:mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe?amount=0.12');

    });

    it('toObject', () => {

      const data = {
        coinCode: 'BTC',
        address: validBitcoinTestnet,
        amount: '0.12',
      };
      const uri = new URI(data);

      expect(uri.toObject()).to.deep.eq(data);

    });

  });

  describe('Statics', () => {

    describe('parse', () => {

      it('uri', () => {

        const str = `bitcoin:${validBitcoinTestnet}?amount=0.12`;
        const uri = URI.parse(str);

        expect(uri.address).to.eq(validBitcoinTestnet);
        expect(uri.amount).to.eq('0.12');
        expect(uri.coinCode).to.eq('BTC');

      });

      it('address', () => {

        const uri = URI.parse(validBitcoinTestnet);

        expect(uri.address).to.eq(validBitcoinTestnet);
        expect(uri.coinCode).to.eq('BTC');
        expect(uri.amount).not.to.exist;

      });

      it('invalid', () => {

        expect(URI.parse.bind(null, 'foiezjqfoiqjsf')).to.throw(Error);

      });

    });

    describe('isURI', () => {

      it('oui', () => {

        expect(URI._statics.isURI('bitcoin:ouhzguhfsd')).to.be.true;
        expect(URI._statics.isURI('bitcoin:ouhzguhfsd?amount=0.12')).to.be.true;
        expect(URI._statics.isURI('bitcoin:ouhzguhfsd?amount=0.12&momo=coucou')).to.be.true;
        expect(URI._statics.isURI('ethereum:ouhzguhfsd?amount=0.12&momo=coucou')).to.be.true;

      });

      it('non', () => {

        expect(URI._statics.isURI('ouhzguhfsd')).to.be.false;
        expect(URI._statics.isURI('uhzguhfsd?amount=0.12')).to.be.false;
        expect(URI._statics.isURI('bitcoin:?amount=0.12&momo=coucou')).to.be.false;
        expect(URI._statics.isURI('bitcoin:')).to.be.false;

      });

    });

    describe('isAddress', () => {

      it('oui', () => {

        expect(URI._statics.isAddress(validBitcoinTestnet)).to.be.true;

      });

      it('non', () => {

        expect(URI._statics.isAddress('oihfzeou')).to.be.false;

      });

    });

    describe('getCoinFromPrefix', () => {

      it('BTC', () => {

        const coin = URI._statics.getCoinFromPrefix('bitcoin');

        expect(coin).to.exist;
        expect(coin.code).to.eq('BTC');

      });

      it('ETH', () => {

        const coin = URI._statics.getCoinFromPrefix('ethereum');

        expect(coin).to.exist;
        expect(coin.code).to.eq('ETH');

      });

      it('unknown', () => {

        const coin = URI._statics.getCoinFromPrefix('poilodo');

        expect(coin).not.to.exist;

      });


    });

    describe('getCoinFromAddress', () => {

      it('BTC', () => {

        const coin = URI._statics.getCoinFromAddress(validBitcoinTestnet);

        expect(coin).to.exist;
        expect(coin.code).to.eq('BTC');

      });

      it('ETH', () => {

        const coin = URI._statics.getCoinFromAddress(validEthereumAddress);

        expect(coin).to.exist;
        expect(coin.code).to.eq('ETH');

      });

      it('unknown', () => {

        const coin = URI._statics.getCoinFromAddress('poilodo');

        expect(coin).not.to.exist;

      });


    });

    describe('getCoinFromCode', () => {

      it('BTC', () => {

        const coin = URI._statics.getCoinFromCode('BTC');

        expect(coin).to.exist;
        expect(coin.code).to.eq('BTC');

      });

      it('ETH', () => {

        const coin = URI._statics.getCoinFromCode('ETH');

        expect(coin).to.exist;
        expect(coin.code).to.eq('ETH');

      });

      it('unknown', () => {

        const coin = URI._statics.getCoinFromCode('poilodo');

        expect(coin).not.to.exist;

      });


    });

    describe('validAddress', () => {

      it('BTC', () => {

        const coin = URI._statics.getCoinFromCode('BTC');

        expect(coin.validAddress(validBitcoinTestnet)).to.be.true;
        expect(coin.validAddress('foehzfoih')).to.be.false;

      });

      it('ETH', () => {

        const coin = URI._statics.getCoinFromCode('ETH');

        expect(coin.validAddress(validEthereumAddress)).to.be.true;
        expect(coin.validAddress('foehzfoih')).to.be.false;

      });


    });

  });

});