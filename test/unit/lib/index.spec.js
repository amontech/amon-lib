const AmonLib = require('../../../lib');

describe('module', () => {

  it('exports', () => {

    //expect(AmonLib.URI).to.exist;
    expect(AmonLib.crypto).to.exist;
    expect(AmonLib.coins).to.exist;

  });

});