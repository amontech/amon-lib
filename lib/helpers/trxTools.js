const { fetch } = require('./axios');
const config = require('../../config/index');

const validateAddress = async (address, network) => {
  const { tronMainnet, shastaTestnet, nileTestnet } = config;

  let url;

  if (network === 'mainnet') {
    url = tronMainnet;
  } else if (network === 'testnet' || address === 'shasta_testnet') {
    url = shastaTestnet;
  } else if (address === 'nile_testnet') {
    url = nileTestnet;
  } else {
    throw new Error('Unknown network');
  }

  const payload = {
    address,
  };

  const isValidAddress = await fetch({ url: `${url}/validateaddress`, payload });
  return isValidAddress;
};

module.exports = validateAddress;
