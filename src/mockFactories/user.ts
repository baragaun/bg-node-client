import { User } from '../types/models/User.js';
import chance from '../helpers/chance.js';

const createUser = (
  attributes: Partial<User>,
): User => {
  const user = new User(attributes);

  if (!user.id) {
    user.id = crypto.randomUUID().replaceAll('-', '');
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
    user.createdAt = new Date().toISOString();
  }

  if (!user.updatedAt) {
    user.updatedAt = new Date().toISOString();
  }

  return user;
}

export default createUser
