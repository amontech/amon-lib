const web3 = require('web3');

const EthereumHelper = {

  validAddress: web3.utils.isAddress.bind(web3.utils),

};

module.exports = EthereumHelper;
