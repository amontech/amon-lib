const Utils = {
  isCoinCode(coinCode, tokenCode) {
    return coinCode.substring(1) === tokenCode;
  },
};

module.exports = Utils;
