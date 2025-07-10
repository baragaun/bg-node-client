import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepAction } from '../../../models/SidMultiStepAction.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = { data: { findMyActiveMultiStepActions: SidMultiStepAction[] | null }, errors?: { message: string }[] };

const findMyActiveMultiStepActions = async (): Promise<
  QueryResult<SidMultiStepAction>
> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyActiveMultiStepActions: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const response: ResponseDataType = await client.query.findMyActiveMultiStepActions(
      modelFields.sidMultiStepAction,
    );

    logger.debug('fsdata.findMyActiveMultiStepActions received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findMyActiveMultiStepActions: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (response.errors) {
      logger.error('fsdata.findMyActiveMultiStepActions: failed with error.',
        { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.findMyActiveMultiStepActions) {
      logger.error('fsdata.findMyActiveMultiStepActions: not found.');
      return { error: 'not-found' };
    }

    return { objects: response.data.findMyActiveMultiStepActions };
  } catch (error) {
    logger.error('fsdata.findMyActiveMultiStepActions: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyActiveMultiStepActions;
