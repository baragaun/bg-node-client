import {
  MutationType,
  ReportUserReasonTextId as ReportUserReasonTextIdFromClient,
} from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { ReportUserReasonTextId } from '../../fsdata/gql/graphql.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const reportUserForMe = async (
  userId: string,
  reasonTextId: ReportUserReasonTextIdFromClient,
  messageText: string | undefined,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<void>> => {
  if (!libData.isInitialized()) {
    logger.error('reportUserForMe: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    return { error: 'unauthorized' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('reportUserForMe: offline');
    return { error: 'offline' };
  }

  const result: QueryResult<void> = {
    operation: MutationType.create,
  };

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    return fsdata.myUser.reportUser(
      userId,
      reasonTextId as unknown as ReportUserReasonTextId,
      messageText,
      queryOptions,
    );
  } catch (error) {
    logger.error(error);
    result.error = error.message;
    return result;
  }
};

export default reportUserForMe;
