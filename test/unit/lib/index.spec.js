const AmonLib = require('../../../lib');

describe('module', () => {

  it('exports', () => {

    expect(AmonLib.URI).to.exist;
    expect(AmonLib.Crypto).to.exist;
    expect(AmonLib.Cryptos).to.exist;

  });

});