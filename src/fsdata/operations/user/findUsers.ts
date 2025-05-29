import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { User } from '../../../models/User.js';
import { UserListItem } from '../../../models/UserListItem.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  UserInput,
  UserListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindUsersArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findUsers: UserListItem[] | null;
  };
  errors?: { message: string }[];
};

const findUsers = async (
  filter: UserListFilter | null | undefined,
  match: Partial<User> | null | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<UserListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findUsers: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindUsersArgs = {
      filter,
      match: match as unknown as InputMaybe<UserInput>,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findUsers({
      $: args,
      ...modelFields.userListItem,
    });

    logger.debug('fsdata.findUsers response:', { response });

    return {
      objects: response.data.findUsers
        ? response.data.findUsers.map((user) => new UserListItem(user))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findUsers: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findUsers;
