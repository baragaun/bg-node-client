import { Factory } from 'rosie';

import { ModelType } from '../../types/enums.js';
import { UserInbox } from '../../types/models/UserInbox.js'
import { UserInboxFactory } from './definitions.js';
import chance from '../helpers/chance.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';

const userInboxFactory = Factory.define<UserInbox>('UserInbox', UserInbox)
  .attr('createdAt', () => new Date(Date.now() - chance.integer({
    min: 24 * 3600 * 1000, // youngest is 1 day old
    max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
  }))) as UserInboxFactory;

userInboxFactory.create = (
  props: Partial<UserInbox> | Partial<UserInbox>[],
  options?: any,
  count?: number,
): Promise<UserInbox | UserInbox[]> => create<UserInbox>(props, options, count);

userInboxFactory.save = async (userInbox: UserInbox): Promise<UserInbox> => save(userInbox);

userInboxFactory.delete = async (userInbox: UserInbox): Promise<UserInbox> => {
  await deleteFunc(userInbox.id, ModelType.UserInbox);

  return userInbox;
};

export default userInboxFactory
