import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { BaseModel } from '../../models/BaseModel.js';
import modelFactory from '../../models/modelFactory.js';
import { QueryResult } from '../../types/QueryResult.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';
import { modelCrudOperations } from '../helpers/modelCrudOperations.js';

const create = async <T extends BaseModel = BaseModel>(
  props: Partial<T>,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.create: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const fieldDef = modelCrudOperations[modelType];
    const args = { input: props };

    if (!fieldDef) {
      logger.error('fsdata.findById: invalid modelType provided', { modelType });
      return { error: 'invalid-model-type' };
    }

    const response = await client.mutation.create({ $: args, ...fieldDef.selections });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.create: errors received',
        { errorCode: (response.errors['0'] as any).extensions.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.create response:', { response });

    return {
      object: response.data.create
        ? modelFactory<T>(response.data[fieldDef.createField], modelType)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.create: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default create;
