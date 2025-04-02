import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationReportUserArgs,
  ReportUserInput,
  ReportUserReasonTextId,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { reportUser: string }, errors?: { message: string }[] };

const reportUser = async (
  userId: string,
  reasonTextId: ReportUserReasonTextId,
  messageText: string | undefined,
  _queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<void>> => {
  try {
    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;
    const client = graffleClientStore.get();
    const input: ReportUserInput = {
      userId,
      reasonTextId,
      messageText,
      createdBy: myUserId,
    };
    const args: MutationReportUserArgs = { input };

    if (!libData.isInitialized()) {
      logger.error('fsdata.reportUser: unavailable');
      return { error: 'unavailable' };
    }

    if (!myUserId) {
      logger.error('fsdata.reportUser: unauthorized.');
      return { error: 'unauthorized' };
    }

    logger.debug('fsdata.reportUser: sending.', { args });

    const response: ResponseDataType = await client.mutation.reportUser({ $: args });

    logger.debug('fsdata.reportUser: response received.', { response });

    if (response.errors) {
      logger.error('fsdata.reportUser: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.reportUser) {
      logger.error('fsdata.reportUser: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    return {};
  } catch (error) {
    logger.error('fsdata.reportUser: failed with error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default reportUser;
