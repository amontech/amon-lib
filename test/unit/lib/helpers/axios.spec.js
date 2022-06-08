const { fetch } = require('../../../../lib/helpers/axios');

describe('Axios Fetch', () => {
  it('fetch', async () => {
    const invalidResponse = await fetch({
      url: 'https://api.trongrid.io/wallet/validateaddress',
      payload: { address: '0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d' },
    });
    expect(invalidResponse).to.be.false;

    const validResponse = await fetch({
      url: 'https://api.shasta.trongrid.io/wallet/validateaddress',
      payload: { address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t' },
    });
    expect(validResponse).to.be.true;
  });
});
