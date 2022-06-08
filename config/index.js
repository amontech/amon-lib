require('dotenv').config();

const config = {
  tronMainnet: process.env.TRON_MAINNET || 'https://api.trongrid.io/wallet',
  shastaTestnet: process.env.SHASTA_TESTNET || 'https://api.shasta.trongrid.io/wallet',
  nileTestnet: process.env.NILE_TESTNET || 'https://nile.trongrid.io/wallet',
};

module.exports = config;
