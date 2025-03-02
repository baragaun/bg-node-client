import { describe, expect, test } from 'vitest';
import { makePQXDHBundle, makeX3DHBundle } from '../../signalClient/libSignalUtils.js';
// import rxdb from '../../libSignal/../db/rxdb/helpers/db.js';
import SignalClient from '@signalapp/libsignal-client';

import type { ChannelMessage, User } from '../../signalClient/types.js';
import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { DbType } from '../../types/enums.js';
import { init } from '../../index.js';
import { jsonToPreKeyBundle } from '../../signalClient/jsonToPreKeyBundle.js';
// import { LibSignalMemStores } from '../../libSignal/stores/mem/LibSignalMemStores.js';
// import { LibSignalStores } from '../../libSignal/stores/rxdb/LibSignalStores.js';
import { preKeyBundleToJSON } from '../../signalClient/preKeyBundleToJSON.js';

const config: BgNodeClientConfig = {
  dbType: DbType.rxdb,
  inBrowser: false,
  debugMode: true,
}

const useX3DH = true;

describe('libSignal', () => {
  test('should exchange end-to-end encrypted messages', async () => {
    const clientAlice = await init(null, { ...config, dbName: 'alice' });
    expect(clientAlice).toBeDefined();

    const clientBob = await init(null, { ...config, dbName: 'bob' });
    expect(clientBob).toBeDefined();

    const alice: User = { id: crypto.randomUUID().replaceAll('-', ''), firstName: 'Alice' };
    const bob: User = { id: crypto.randomUUID().replaceAll('-', ''), firstName: 'Bob' };

    const channelMessage1: ChannelMessage = {
      text: 'Greetings hoo-man',
      createBy: alice.id,
    };

    const channelMessage2: ChannelMessage = {
      text: 'Sometimes the only thing more dangerous than a question is an answer.',
      createBy: bob.id,
    };
    channelMessage1.buffer = Buffer.from(channelMessage1.text, 'utf8');
    channelMessage2.buffer = Buffer.from(channelMessage2.text, 'utf8');

    const aliceStores = clientAlice.libSignalStores();
    const bobStores = clientBob.libSignalStores();

    const aliceAddress = SignalClient.ProtocolAddress.new(alice.id, 1);
    const bobAddress = SignalClient.ProtocolAddress.new(bob.id, 1);

    // Bob is building his prekey bundle:
    const bobsPreKeyBundle: SignalClient.PreKeyBundle = useX3DH
      ? await makeX3DHBundle(bobAddress, bobStores)
      : await makePQXDHBundle(bobAddress, bobStores);

    // Converting Bob's prekey bundle into a JSON string:
    const bobsPreKeyBundleSerialized = preKeyBundleToJSON(bobsPreKeyBundle);

    // Bob is sending a message to Alice (skipped here)
    // Alice receives the message (skipped here)

    // Converting Bob's prekey bundle from JSON string to PreKeyBundle object:
    const bobsPreKeyBundleAsReceived: SignalClient.PreKeyBundle = jsonToPreKeyBundle(bobsPreKeyBundleSerialized);
    // const bobsPreKeyBundleAsReceivedRxdb: SignalClient.PreKeyBundle = jsonToPreKeyBundle(bobsPreKeyBundleSerializedRxdb);

    // Alice processes Bob's prekey bundle:
    await SignalClient.processPreKeyBundle(
      bobsPreKeyBundleAsReceived,
      bobAddress,
      aliceStores.session,
      aliceStores.identity
    );

    // Alice encrypts a chat message text:
    let encryptedMessage1: SignalClient.CiphertextMessage;
    try {
      encryptedMessage1 = await SignalClient.signalEncrypt(
        channelMessage1.buffer,
        bobAddress,
        aliceStores.session,
        aliceStores.identity
      );
    } catch (error) {
      console.error('Error encrypting message:', error);
    }

    expect(encryptedMessage1.type()).toBe(SignalClient.CiphertextMessageType.PreKey);

    const cipherTextR1: SignalClient.PreKeySignalMessage = SignalClient.PreKeySignalMessage.deserialize(
      encryptedMessage1.serialize()
    );

    // The encrypted message is converted into a base64 encoded string:
    const buffer = cipherTextR1.serialize();
    const base64EncryptedMessageText = buffer.toString('base64');

    // Alice sends base64EncryptedMessageText to Bob (skipped here)

    // Bob receives the message (skipped here)

    // Bob converts the base64 encoded string back into a PreKeySignalMessage object:
    const receivedBuffer = Buffer.from(base64EncryptedMessageText, 'base64');
    const cipherTextR1AsReceived = SignalClient.PreKeySignalMessage.deserialize(receivedBuffer);

    // Bob decrypts the message:
    const bDPlaintext = await SignalClient.signalDecryptPreKey(
      cipherTextR1AsReceived,
      aliceAddress,
      bobStores.session,
      bobStores.identity,
      bobStores.prekey,
      bobStores.signed,
      bobStores.kyber
    );

    expect(bDPlaintext).toBe(channelMessage1.buffer);

    const bDPPlainTextAsString = Buffer.from(bDPlaintext).toString('utf8');

    expect(bDPPlainTextAsString).toBe(channelMessage1.text);

    // Bob sends a message back to Alice:
    const encryptedMessage2: SignalClient.CiphertextMessage = await SignalClient.signalEncrypt(
      channelMessage2.buffer,
      aliceAddress,
      bobStores.session,
      bobStores.identity
    );

    expect(encryptedMessage2.type()).toBe(SignalClient.CiphertextMessageType.Whisper);

    const bCiphertextR = SignalClient.SignalMessage.deserialize(
      encryptedMessage2.serialize()
    );

    // Alice receives the message and decrypts it:
    const aDPlaintext = await SignalClient.signalDecrypt(
      bCiphertextR,
      bobAddress,
      aliceStores.session,
      aliceStores.identity
    );

    expect(aDPlaintext).toBe(channelMessage2.buffer);

    const aDPPlainTextAsString = Buffer.from(aDPlaintext).toString('utf8');

    expect(aDPPlainTextAsString).toBe(channelMessage2.text);

    // Sessions
    // The Signal protocol typically uses one session for a conversation between two
    // devices. This session is established using X3DH to generate session keys,
    // and Double Ratchet ensures ongoing secure messaging. However, if there are
    // multiple devices or key refreshes, more sessions can exist. So, in a
    // typical one-on-one chat, there's just one session per device pair. But if
    // one device is used multiple times, each device gets its own session.
    // Sessions can be reset, invalidating the previous one.

    // This is the session record that Bob has for the chat with Alice:
    const session = await bobStores.session.getSession(aliceAddress);

    expect(session).toBeDefined();
    expect(session!.serialize().length).toBeLessThan(1);
    expect(session!.localRegistrationId()).toBe(5);
    expect(session!.remoteRegistrationId()).toBe(5);
    expect(session!.hasCurrentState()).toBeTruthy();
    expect(session!.currentRatchetKeyMatches(SignalClient.PrivateKey.generate().getPublicKey())).toBeTruthy();

    // Bob is archiving the chat:
    session?.archiveCurrentState();

    expect(session!.hasCurrentState()).toBeFalsy();
    expect(session!.currentRatchetKeyMatches(SignalClient.PrivateKey.generate().getPublicKey())).toBeFalsy();
  });
});
