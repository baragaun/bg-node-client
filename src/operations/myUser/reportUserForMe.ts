import {
  MutationType,
  ReportUserReasonTextId as ReportUserReasonTextIdFromClient,
} from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { ReportUserReasonTextId } from '../../fsdata/gql/graphql.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const reportUserForMe = async (
  userId: string,
  reasonTextId: ReportUserReasonTextIdFromClient,
  messageText: string | undefined,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<MutationResult<void>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  const result: MutationResult<void> = {
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
