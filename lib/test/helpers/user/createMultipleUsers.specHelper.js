import { expect } from 'vitest';
import { signMeUpSpecHelper } from './signMeUp.specHelper.js';
import userFactory from '../../factories/user.js';
export const createMultipleUsersSpecHelper = async (props, client) => {
    const users = [];
    if (!Array.isArray(props)) {
        props = Array.from({ length: props }, () => userFactory.build());
    }
    for (let i = 0; i < props.length; i++) {
        const user = await signMeUpSpecHelper(props[i], true, client);
        expect(user).toBeTruthy();
        users.push(user);
    }
    return users;
};
//# sourceMappingURL=createMultipleUsers.specHelper.js.map