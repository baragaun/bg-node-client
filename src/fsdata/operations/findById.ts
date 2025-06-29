import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Model } from '../../models/Model.js';
import modelFactory from '../../models/modelFactory.js';
import { QueryResult } from '../../types/QueryResult.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';
import { modelCrudOperations } from '../helpers/modelCrudOperations.js';

const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
  selections?: any,
): Promise<QueryResult<T>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findById: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const fieldDef = modelCrudOperations[modelType];

    if (!fieldDef) {
      logger.error('fsdata.findById: invalid modelType provided', { modelType });
      return { error: 'invalid-model-type' };
    }

    const args = fieldDef.skipVars
      ? {}
      : { $: { [fieldDef.keyFieldName || 'id']: id } };

    logger.debug('fsdata.findById: sending.', { args });

    const response = await client.query[fieldDef.findByIdField]({
      ...args,
      ...(selections || fieldDef.selections),
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findById: errors received', {
        id,
        modelType,
        errorCode: (response.errors['0'] as any).extensions.code,
        errors: JSON.stringify(response.errors),
      });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.findById: response received.',
      { response, object: JSON.stringify(response.data[fieldDef.findByIdField]) });

    if (response.errors) {
      logger.error('fsdata.findById: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data[fieldDef.findByIdField]) {
      logger.error('fsdata.findById: not found.');
      return { error: 'not-found' };
    }

    return { object: modelFactory<T>(response.data[fieldDef.findByIdField], modelType) };
  } catch (error) {
    logger.error('findById: error', { error, headers: helpers.headers() });
    return null;
  }
};

export default findById;
