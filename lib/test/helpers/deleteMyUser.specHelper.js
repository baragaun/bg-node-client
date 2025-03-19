import { expect } from 'vitest';
const deleteMyUser = async (client) => {
    const deleteMyUserResponse = await client.operations.myUser.deleteMyUser(undefined, undefined, true);
    expect(deleteMyUserResponse.error).toBeUndefined();
    const clientInfo = await client.clientInfoStore.load();
    expect(clientInfo.myUserId).toBeUndefined();
    expect(clientInfo.authToken).toBeUndefined();
};
export default deleteMyUser;
//# sourceMappingURL=deleteMyUser.specHelper.js.map