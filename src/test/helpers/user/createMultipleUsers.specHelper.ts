import { expect } from 'vitest';

import { signMeUpSpecHelper } from './signMeUp.specHelper.js';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUser } from '../../../models/MyUser.js';
import userFactory from '../../factories/user.js';

export const createMultipleUsersSpecHelper = async (
  props: Partial<MyUser>[] | number,
  client: BgNodeClient,
): Promise<MyUser[] | null> => {
  const users: MyUser[] = [];

  if (!Array.isArray(props)) {
    props = Array.from({ length: props }, () => userFactory.build());
  }

  for (let i = 0; i < props.length; i++) {
    const user = await signMeUpSpecHelper(
      props[i],
      true,
      client,
    );
    expect(user).toBeDefined();
    users.push(user);
  }

  return users;
};
