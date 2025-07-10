import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { User } from '../../../models/User.js';
import { UserListItem } from '../../../models/UserListItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  UserInput,
  UserListFilter,
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindUsersArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findUsers: UserListItem[];
  };
  errors?: { message: string }[];
};

const findUsers = async (
  filter: UserListFilter | null | undefined,
  match: Partial<User> | null | undefined,
  options: FindObjectsOptions,
): Promise<QueryResult<UserListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findUsers: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindUsersArgs = {
      filter: (filter || null) as UserListFilter | null,
      match: match as unknown as InputMaybe<UserInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>,
    };

    const response: ResponseDataType = await client.query.findUsers({
      $: args,
      ...modelFields.userListItem,
    });

    logger.debug('fsdata.findUsers received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findUsers: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findUsers
        ? response.data.findUsers.map((user) => new UserListItem(user))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findUsers: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findUsers;
