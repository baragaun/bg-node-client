import { expect } from 'vitest';
import { deleteMyUserSpecHelper } from './deleteMyUser.specHelper.js';
import { signMeInSpecHelper } from './signMeIn.specHelper.js';
export const deleteMultipleUsersSpecHelper = async (users, client) => {
    for (let i = 0; i < 2; i++) {
        const signInResult = await signMeInSpecHelper(users[i].email, users[i].adminNotes, client);
        expect(signInResult).toBeTruthy();
        expect(await deleteMyUserSpecHelper(client)).toBeTruthy();
    }
    return true;
};
//# sourceMappingURL=deleteMultipleUsers.specHelper.js.map