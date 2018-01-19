const bcrypt = require('bcryptjs');
const shajs = require('sha.js');

/**
 * Cryptography tools. Hashing, with salt (bcrypt) or without (sha)
 * @type {{SALT_ROUNDS: number, bcrypt: {hash: (function(*=): Promise), verifyHash: (function(*=, *=): Promise), getHashRounds: (function(*=): Promise)}, sha: {hash: (function(*=))}}}
 */
const Crypto = {

  SALT_ROUNDS: 8,

  bcrypt: {

    /**
     * Hash txt with salt
     * @param {string} text
     * @return {Promise<string>} hash
     */
    async hash(text) {
      const salt = await bcrypt.genSalt(Crypto.SALT_ROUNDS);
      return bcrypt.hash(text, salt);
    },

    /**
     * Verify if text corresponds to hash
     * @param {string} text
     * @param {string} hash
     * @return {Promise<boolean>} valid
     */
    async verifyHash(text, hash) {
      return bcrypt.compare(text, hash);
    },

    /**
     * Detect if string is a hash and counts rounds if it is
     * @param {string} hash
     * @return {Promise.<number>} Number of rounds
     */
    async getHashRounds(hash) {
      return bcrypt.getRounds(hash);
    },

  },

  sha: {

    /**
     * Hash without salt
     *
     * @param   {string} str
     * @return  {string} hash
     */
    hash(str) {
      return shajs('sha256').update(str).digest('hex');
    },

  }
  // TODO sha
};

module.exports = Crypto;