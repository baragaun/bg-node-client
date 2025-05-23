import { Factory } from 'rosie';

import { UserInboxFactory } from './definitions.js';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import randomDate from '../../helpers/randomDate.js';
import { UserInbox } from '../../models/UserInbox.js';

const userInboxFactory = Factory.define<UserInbox>('UserInbox', UserInbox).attr(
  'createdAt',
  () => randomDate(),
) as UserInboxFactory;

userInboxFactory.create = (
  props: Partial<UserInbox> | Partial<UserInbox>[],
  options?: any,
  count?: number,
): Promise<UserInbox | UserInbox[]> =>
  create<UserInbox>(props, ModelType.UserInbox, options, count);

userInboxFactory.save = async (userInbox: UserInbox): Promise<UserInbox> =>
  save(userInbox);

userInboxFactory.delete = async (userInbox: UserInbox): Promise<UserInbox> => {
  await deleteFunc(userInbox.id, ModelType.UserInbox);

  return userInbox;
};

export default userInboxFactory;
