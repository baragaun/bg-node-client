import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreateMultiStepActionArgs, SidMultiStepActionInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createMultiStepAction: SidMultiStepActionProgress;
  };
  error?: string;
};

const createMultiStepAction = async (
  input: SidMultiStepActionInput,
): Promise<QueryResult<SidMultiStepActionProgress>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createMultiStepAction: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateMultiStepActionArgs = { input };
    logger.debug('fsdata.createMultiStepAction: sending:', { args });

    const response: ResponseDataType = await client.mutation.createMultiStepAction({
      $: args,
      ...modelFields.sidMultiStepActionProgress,
    });

    logger.debug('fsdata.createMultiStepAction received response.',
      { response: JSON.stringify(response) });

    if (response.error) {
      logger.error('fsdata.createMultiStepAction: errors received.',
        { errorCode: (response.error as any)?.extensions?.code, errors: JSON.stringify(response.error) });

      return { error: response.error };
    }

    return {
      object: response.data.createMultiStepAction
        ? response.data.createMultiStepAction
      : null,
    };
  } catch (error) {
    logger.error('fsdata.createMultiStepAction: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createMultiStepAction;
