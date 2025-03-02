import SignalClient from '@signalapp/libsignal-client';
// import * as util from './util';
import Chance from 'chance';
// import * as uuid from 'uuid';
// import type { Stores } from '$lib/stores/mem/Stores'
// util.initLogger();
const chance = Chance();
/**
 * makeX3DHBundle is typically used to assemble the set of public keys and associated
 * metadata required to initiate an X3DH key exchange. In protocols like Signal,
 * this bundle usually contains:
 *
 * Identity Key: The long-term public key of the user.
 * Signed PreKey: A medium-term key that’s signed by the identity key, ensuring its
 *                authenticity.
 * One-Time PreKey(s): Keys that are meant to be used only once to provide additional
 *                     forward secrecy.
 * When a user wants to start an encrypted session, they retrieve the X3DH bundle from
 * the recipient (often published on a server). The initiator then uses these keys along
 * with their own private keys to perform Diffie–Hellman operations (the
 * "Triple Diffie–Hellman" in X3DH) to establish shared secrets securely.
 *
 * In short, makeX3DHBundle packages together the necessary public keys so that another
 * party can securely perform the key agreement and start an end-to-end encrypted session.
 *
 * TTL:
 * The TTL isn’t defined by the protocol itself—it depends on your security and
 * usability trade‑offs. In practice:
 * - One‑time prekeys (which are meant to be used only once) are usually set to expire fairly
 *   quickly (often on the order of 24 hours) so that stale keys aren’t used for session
 *   establishment.
 * - Signed prekeys, which are meant to last longer (and are used if no one‑time prekey is
 *   available), might have a TTL in the range of 30 days (or even a few months).
 * - The overall bundle TTL is typically chosen to reflect the validity of the signed
 *   prekey. For many implementations, a TTL of about 30 days is common—but if you’re
 *   refreshing your bundle daily (to ensure fresh one‑time prekeys), then a TTL of 24
 *   hours might be used for that part.
 * In short, a reasonable TTL for a bundle created by makeX3DHBundle might be around 24
 * hours if you expect a daily refresh for one‑time prekeys, or up to 30 days if you
 * want the signed prekey to be valid longer. The choice depends on how frequently you
 * can or want to update your keys and the level of forward secrecy you require.
 * @param address
 * @param stores
 */
export async function makeX3DHBundle(address, stores) {
    const identityKey = await stores.identity.getIdentityKey();
    const prekeyId = chance.natural({ max: 10000 });
    const prekey = SignalClient.PrivateKey.generate();
    const signedPrekeyId = chance.natural({ max: 10000 });
    const signedPrekey = SignalClient.PrivateKey.generate();
    const signedPrekeySignature = identityKey.sign(signedPrekey.getPublicKey().serialize());
    await stores.prekey.savePreKey(prekeyId, SignalClient.PreKeyRecord.new(prekeyId, prekey.getPublicKey(), prekey));
    await stores.signed.saveSignedPreKey(signedPrekeyId, SignalClient.SignedPreKeyRecord.new(signedPrekeyId, chance.timestamp(), signedPrekey.getPublicKey(), signedPrekey, signedPrekeySignature));
    return SignalClient.PreKeyBundle.new(await stores.identity.getLocalRegistrationId(), address.deviceId(), prekeyId, prekey.getPublicKey(), signedPrekeyId, signedPrekey.getPublicKey(), signedPrekeySignature, identityKey.getPublicKey());
}
/**
 * makePQXDHBundle is typically used to assemble the set of public keys and associated
 * metadata required to initiate a PQ-X3DH key exchange. In protocols like Signal,
 * this bundle usually contains:
 * Identity Key: The long-term public key of the user.
 * Signed PreKey: A medium-term key that’s signed by the identity key, ensuring its
 *               authenticity.
 * Kyber PreKey: A medium-term key that’s signed by the identity key, ensuring its
 *               authenticity.
 * One-Time PreKey(s): Keys that are meant to be used only once to provide additional
 *                     forward secrecy.
 * Kyber PreKey Signature: A signature of the Kyber PreKey.
 *
 * This is for the post‑quantum version of the key exchange.
 * @param address
 * @param stores
 */
export async function makePQXDHBundle(address, stores) {
    const identityKey = await stores.identity.getIdentityKey();
    const prekeyId = chance.natural({ max: 10000 });
    const prekey = SignalClient.PrivateKey.generate();
    const signedPrekeyId = chance.natural({ max: 10000 });
    const signedPrekey = SignalClient.PrivateKey.generate();
    const signedPrekeySignature = identityKey.sign(signedPrekey.getPublicKey().serialize());
    const kyberPrekeyId = chance.natural({ max: 10000 });
    const kyberKeyPair = SignalClient.KEMKeyPair.generate();
    const kyberPrekeySignature = identityKey.sign(kyberKeyPair.getPublicKey().serialize());
    await stores.prekey.savePreKey(prekeyId, SignalClient.PreKeyRecord.new(prekeyId, prekey.getPublicKey(), prekey));
    await stores.signed.saveSignedPreKey(signedPrekeyId, SignalClient.SignedPreKeyRecord.new(signedPrekeyId, chance.timestamp(), signedPrekey.getPublicKey(), signedPrekey, signedPrekeySignature));
    await stores.kyber.saveKyberPreKey(kyberPrekeyId, SignalClient.KyberPreKeyRecord.new(kyberPrekeyId, chance.timestamp(), kyberKeyPair, kyberPrekeySignature));
    return SignalClient.PreKeyBundle.new(await stores.identity.getLocalRegistrationId(), address.deviceId(), prekeyId, prekey.getPublicKey(), signedPrekeyId, signedPrekey.getPublicKey(), signedPrekeySignature, identityKey.getPublicKey(), kyberPrekeyId, kyberKeyPair.getPublicKey(), kyberPrekeySignature);
}
export const sessionVersionTestCases = [
    { suffix: 'v3', makeBundle: makeX3DHBundle, expectedVersion: 3 },
    { suffix: 'v4', makeBundle: makePQXDHBundle, expectedVersion: 4 },
];
//# sourceMappingURL=libSignalUtils.js.map