const CoinHelper = require('./coin');
const Web3 = require('web3');

const web3 = new Web3();

class EthereumHelper extends CoinHelper {

  validAddress(address) {

    return web3.isAddress(address);

  }

  addressExplorerUrl(address) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://etherscan.io/address/${address}`;
      case 'testnet':
        return `https://kovan.etherscan.io/address/${address}`;
      default:
        return null;
    }
  }

  txExplorerUrl(txId) {
    switch(this.opts.network) {
      case 'mainnet':
        return `https://etherscan.io/tx/${txId}`;
      case 'testnet':
        return `https://kovan.etherscan.io/tx/${txId}`;
      default:
        return null;
    }
  }


};

module.exports = EthereumHelper;
