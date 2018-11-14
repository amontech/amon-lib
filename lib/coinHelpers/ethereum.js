const Web3 = require('web3');

const web3 = new Web3();

const EthereumHelper = {

  validAddress: web3.isAddress.bind(web3),

};

module.exports = EthereumHelper;
