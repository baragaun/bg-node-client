import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, SidMultiStepActionInput } from '../../fsdata/gql/graphql.js';
import data from '../../helpers/data.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const verifyMyEmail = async (
  email: string,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  const config = data.config();

  if (!config) {
    console.error('findMyUser: no config.');
    return null;
  }

  try {
    console.log('verifyEmail Input:', { email });

    const input: SidMultiStepActionInput = {
      userId: config.myUserId,
      actionType: MultiStepActionType.VerifyEmail,
      email,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (!response || !response.actionId) {
      console.error('verifyMyEmail: action not found.');
      return {
        error: 'system-error',
      };
    }

    return getMultiStepActionProgress(response.actionId, undefined, queryOptions);
  } catch (error) {
    console.error(error);
    return {
      error: (error as Error).message,
    };
  }
};

export default verifyMyEmail;
