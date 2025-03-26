import { expect } from 'vitest';
import { generateUserPropsSpecHelper } from './generateUserProps.specHelper.js';
import { signMeUpSpecHelper } from './signMeUp.specHelper.js';
export const createMultipleUsersSpecHelper = async (props, client) => {
    const users = [];
    if (!Array.isArray(props)) {
        props = Array.from({ length: props }, () => generateUserPropsSpecHelper());
    }
    for (let i = 0; i < 2; i++) {
        const user = await signMeUpSpecHelper(props[i], true, client);
        expect(user).toBeDefined();
        users.push(user);
    }
    return users;
};
//# sourceMappingURL=createMultipleUsers.specHelper.js.map