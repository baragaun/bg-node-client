import FactoryGirl from 'factory-girl'

import { UserInbox } from '../../types/models/UserInbox.js';
import chance from '../helpers/chance.js';

const createdAt = new Date(Date.now() - 36000000); // 10 hours ago

const attrs: FactoryGirl.Attributes<Partial<UserInbox>> = {
  createdAt: () => createdAt,
  updatedAt: () => createdAt,
  userId: chance.guid(),
}

const initUserInboxFactory = (): void => {
  FactoryGirl.factory.define<UserInbox>('UserInbox', UserInbox, attrs)
}

export default initUserInboxFactory
