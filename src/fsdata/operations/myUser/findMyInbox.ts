import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { UserInbox } from '../../../models/UserInbox.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { UserInbox as UserInboxFromApi } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = { data: { findMyInbox: UserInboxFromApi }, errors?: { message: string }[] };

const findMyInbox = async (): Promise<QueryResult<UserInbox>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyInbox: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const response: ResponseDataType = await client.query.findMyInbox({
      ...modelFields.userInbox,
    });

    logger.debug('fsdata.findMyInbox: response received.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findMyInbox: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (response.errors) {
      logger.error('fsdata.findMyInbox: failed with error.', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.findMyInbox) {
      logger.error('fsdata.findMyInbox: not found.');
      return { error: 'not-found' };
    }

    return { object: new UserInbox(response.data.findMyInbox as unknown as UserInbox) };
  } catch (error) {
    const headers = helpers.headers();
    logger.error('findMyInbox failed.', { error, headers });
    return { error: (error as Error).message };
  }
};

export default findMyInbox;
