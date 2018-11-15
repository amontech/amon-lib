const CoinHelper = require('./coin');
const Web3 = require('web3');

const web3 = new Web3();

class EthereumHelper extends CoinHelper {

  validAddress(address) {

    return web3.isAddress(address);

  }

  etherscanUrl() {
    const prefix = this.opts.network === 'testnet' ? 'kovan.' : '';
    return `https://${prefix}etherscan.io`;
  }

  addressExplorerUrl(address) {
    return this.etherscanUrl() + `/address/${address}`;
  }

  txExplorerUrl(txId) {
    return this.etherscanUrl() + `/tx/${txId}`;
  }


};

module.exports = EthereumHelper;
