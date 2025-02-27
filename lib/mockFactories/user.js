import { faker } from '@faker-js/faker';
import { User } from '../types/models/User.js';
const createUser = (attributes) => {
    const user = new User(attributes);
    if (!user.id) {
        user.id = faker.string.uuid();
    }
    if (!user.userHandle) {
        user.userHandle = faker.internet.username();
    }
    if (!user.firstName) {
        user.firstName = faker.person.firstName();
    }
    if (!user.lastName) {
        user.lastName = faker.person.lastName();
    }
    if (!user.email) {
        user.email = faker.internet.email();
    }
    if (!user.avatarUrl) {
        user.avatarUrl = faker.image.avatar();
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