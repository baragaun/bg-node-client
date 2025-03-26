import { expect } from 'vitest';
import { signMeUpSpeckHelper } from './signMeUp.speckHelper.js';
import { generateUserPropsSpeckHelper } from './generateUserProps.speckHelper.js';
export const createMultipleUsersSpeckHelper = async (props, client) => {
    const users = [];
    if (!Array.isArray(props)) {
        props = Array.from({ length: props }, () => generateUserPropsSpeckHelper());
    }
    for (let i = 0; i < 2; i++) {
        const user = await signMeUpSpeckHelper(props[i], true, client);
        expect(user).toBeDefined();
        user.adminNotes = props[i].password;
        users.push(user);
    }
    return users;
};
//# sourceMappingURL=createMultipleUsers.speckHelper.js.map