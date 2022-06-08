const validateAddress = require('../../../../lib/helpers/trxTools');

describe('Tron Tools', () => {
  it('validateAddress', async () => {
    const invalidAddress = await validateAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d', 'testnet');
    expect(invalidAddress).to.be.false;

    const validAddress = await validateAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', 'testnet');
    expect(validAddress).to.be.true;
  });
});
