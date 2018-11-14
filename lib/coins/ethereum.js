const CoinHelper = require('./coin');
const Web3 = require('web3');

const web3 = new Web3();

class EthereumHelper extends CoinHelper {

  validAddress(address) {

    return web3.isAddress(address);

  }

};

module.exports = EthereumHelper;
