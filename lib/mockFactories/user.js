import chance from '../helpers/chance.js';
import { User } from '../models/User.js';
const createUser = (attributes) => {
    const user = new User(attributes);
    if (!user.id) {
        user.id = crypto.randomUUID().replaceAll('-', '');
    }
    if (!user.userHandle) {
        user.userHandle = `${chance.word()}-${Date.now()}`;
    }
    if (!user.firstName) {
        user.firstName = chance.first();
    }
    if (!user.lastName) {
        user.lastName = chance.last();
    }
    if (!user.email) {
        user.email = `holger+test-${Date.now()}@baragaun.com`;
    }
    if (!user.avatarUrl) {
        user.avatarUrl = chance.avatar();
    }
    if (!user.createdAt) {
        user.createdAt = new Date().toISOString();
    }
    if (!user.updatedAt) {
        user.updatedAt = new Date().toISOString();
    }
    return user;
};
export default createUser;
//# sourceMappingURL=user.js.map