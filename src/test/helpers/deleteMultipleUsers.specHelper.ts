import { deleteMyUserSpecHelper } from './deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from './getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from './signMeIn.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';

export const deleteMultipleUsersSpecHelper = async (
  users: MyUser[],
  client: BgNodeClient,
): Promise<boolean> => {
  logger.debug('deleteMultipleUsersSpecHelper: called', { users });

  for (let i = 0; i < 2; i++) {
    logger.debug(`deleteMultipleUsersSpecHelper: signing in user #${i}`);
    await signMeInSpecHelper(
      users[i].email as string,
      getTestUserPropsSpecHelper(users[i]).password,
      client,
    );

    logger.debug(`deleteMultipleUsersSpecHelper: deleting user #${i}`);
    await deleteMyUserSpecHelper(client);
  }

  return true;
};
