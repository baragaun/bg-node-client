import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationVerifyMultiStepActionTokenArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    verifyMultiStepActionToken: SidMultiStepActionProgress;
  };
  errors?: { message: string }[];
};

const verifyMultiStepActionToken = async (
  actionId: string,
  confirmToken: string,
  newPassword?: string,
): Promise<QueryResult<SidMultiStepActionProgress>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.verifyMultiStepActionToken: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationVerifyMultiStepActionTokenArgs = {
      input: {
        actionId,
        token: confirmToken,
        newPassword,
      },
    };
    logger.debug('fsdata.verifyMultiStepActionToken: sending:', { args });

    const response: ResponseDataType = await client.mutation.verifyMultiStepActionToken({
      $: args,
      ...modelFields.sidMultiStepActionProgress,
    });

    logger.debug('fsdata.verifyMultiStepActionToken: received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.verifyMultiStepActionToken: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return { object: response.data.verifyMultiStepActionToken };
  } catch (error) {
    logger.error('verifyMultiStepActionToken mutation error:',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default verifyMultiStepActionToken;
