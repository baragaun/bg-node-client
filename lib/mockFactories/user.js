import { User } from '../types/models/User.js';
import chance from '../helpers/chance.js';
const createUser = (attributes) => {
    const user = new User(attributes);
    if (!user.id) {
        user.id = crypto.randomUUID().replace('-', '');
    }
    if (!user.userHandle) {
        user.userHandle = chance.word();
    }
    if (!user.firstName) {
        user.firstName = chance.first();
    }
    if (!user.lastName) {
        user.lastName = chance.last();
    }
    if (!user.email) {
        user.email = chance.email();
    }
    if (!user.avatarUrl) {
        user.avatarUrl = chance.avatar();
    }
    if (!user.createdAt) {
        user.createdAt = new Date();
    }
    if (!user.updatedAt) {
        user.updatedAt = new Date();
    }
    return user;
};
export default createUser;
//# sourceMappingURL=user.js.map