const Web3 = require('web3');

const web3 = new Web3();

const EthereumHelper = {

  validAddress: web3.isAddress.bind(web3),
  compareAddress: (addr1, addr2) => addr1.toLowerCase() === addr2.toLowerCase()

};

module.exports = EthereumHelper;
