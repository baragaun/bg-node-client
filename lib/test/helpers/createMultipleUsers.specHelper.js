import { expect } from 'vitest';
import { signMeUpSpecHelper } from './signMeUp.specHelper.js';
import { generateUserPropsSpecHelper } from './generateUserProps.specHelper.js';
export const createMultipleUsersSpecHelper = async (props, client) => {
    const users = [];
    if (!Array.isArray(props)) {
        props = Array.from({ length: props }, () => generateUserPropsSpecHelper());
    }
    for (let i = 0; i < 2; i++) {
        const user = await signMeUpSpecHelper(props[i], true, client);
        expect(user).toBeDefined();
        user.adminNotes = props[i].password;
        users.push(user);
    }
    return users;
};
//# sourceMappingURL=createMultipleUsers.specHelper.js.map