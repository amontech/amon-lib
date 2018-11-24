const CoinHelper = require('./coin');
const Web3 = require('web3');

const web3 = new Web3();

class EthereumHelper extends CoinHelper {

  getURIPrefix() {
    return 'ethereum';
  }

  validAddress(address) {
    return web3.utils.isAddress(address);
  }

  compareAddress(addr1, addr2) {
    return addr1.toLowerCase() === addr2.toLowerCase();
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

}

EthereumHelper.code = 'ETH';

module.exports = EthereumHelper;
