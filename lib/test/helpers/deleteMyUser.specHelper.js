import { expect } from 'vitest';
export const deleteMyUserSpecHelper = async (client) => {
    const clientInfo1 = await client.clientInfoStore.load();
    expect(clientInfo1.isSignedIn).toBeTruthy();
    const deleteMyUserResponse = await client.operations.myUser.deleteMyUser(undefined, undefined, true);
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