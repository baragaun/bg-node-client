import { expect } from 'vitest';
export const deleteMyUserSpecHelper = async (client) => {
    if (!client || !client.clientInfoStore) {
        throw new Error('deleteMyUserSpecHelper: client or clientInfoStore is not available.');
    }
    const clientInfo1 = await client.clientInfoStore.load();
    if (!clientInfo1.isSignedIn) {
        throw new Error('deleteMyUserSpecHelper: user not signed in.');
    }
    expect(clientInfo1.isSignedIn).toBeTruthy();
    const deleteMyUserResponse = await client.operations.myUser.deleteMyUser(undefined, undefined);
    expect(deleteMyUserResponse.error).toBeUndefined();
    const clientInfo2 = await client.clientInfoStore.load();
    expect(clientInfo2.isSignedIn).toBeFalsy();
    expect(clientInfo2.authToken).toBeUndefined();
    expect(clientInfo2.localContentStatus).toBeUndefined();
    expect(clientInfo2.remoteContentStatus).toBeUndefined();
    expect(clientInfo2.sessionStartedAt).toBeUndefined();
    expect(clientInfo2.sessionEndedAt).toBeUndefined();
};
//# sourceMappingURL=deleteMyUser.specHelper.js.map