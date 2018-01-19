const Crypto = require('../../../lib/crypto');

describe('Crypto', () => {

  describe('bcrypt', () => {

    it('Should hash', async () => {
      const str = '--- je mange des pâtes ---';
      const hash = await Crypto.bcrypt.hash(str);
      expect(hash).not.to.eq(str);
    });

    it('Should verify hash', async () => {
      const str = '--- & j\'enfile ta reuss! ---';
      const hash = await Crypto.bcrypt.hash(str);
      const verify = await Crypto.bcrypt.verifyHash(str, hash);
      expect(verify).to.be.true;
    });

    it('Should get rounds', async () => {
      const str = '--- t0n CHAT /\\/\\E LÊCHE ---';
      const hash = await Crypto.bcrypt.hash(str);
      const rounds = await Crypto.bcrypt.getHashRounds(hash);
      expect(rounds).to.eq(Crypto.SALT_ROUNDS);
    });

    it('Should not get rounds for not hash', async () => {
      const str = '--- t0n CHAT /\\/\\E LÊCHE ---';
      const rounds = await Crypto.bcrypt.getHashRounds(str);
      expect(rounds).to.be.a.NaN;
    });

  });

  describe('sha', () => {

    it('Should hash', async () => {
      const str = '--- je mange des pâtes ---';
      const hash = await Crypto.sha.hash(str);

      expect(hash).not.to.eq(str);
      expect(hash).to.eq('0a4f185e2483d5ea4e370c6b4ee31c51840f212a7c25de997509a8953d5fcb86');
    });

    it('same hash two times', async () => {
      const str = '--- je mange des pâtes ---';
      const hash = await Crypto.sha.hash(str);
      const hash2 = await Crypto.sha.hash(str);
      expect(hash).to.eq(hash2);
    });

  });

  it('hash sha+bcrypt and verify', async () => {

    const str = '--- & j\'enfile ta reuss! ---';
    const shahash = await Crypto.sha.hash(str);
    const bcrypthash = await Crypto.bcrypt.hash(shahash);

    const verify = await Crypto.bcrypt.verifyHash(shahash, bcrypthash);
    expect(verify).to.be.true;

  });

});