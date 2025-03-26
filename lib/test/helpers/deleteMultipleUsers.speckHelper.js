import { expect } from 'vitest';
import { deleteMyUserSpecHelper } from './deleteMyUser.specHelper.js';
import { signMeInSpeckHelper } from './signMeIn.speckHelper.js';
import logger from '../../helpers/logger.js';
export const deleteMultipleUsersSpeckHelper = async (users, client) => {
    for (let i = 0; i < 2; i++) {
        const signInResult = await signMeInSpeckHelper(users[i].email, users[i].adminNotes, client);
        expect(signInResult).toBeTruthy();
        logger.debug('Deleting user #2', { userId: users[i].id });
        expect(await deleteMyUserSpecHelper(client)).toBeTruthy();
    }
    return true;
};
//# sourceMappingURL=deleteMultipleUsers.speckHelper.js.map