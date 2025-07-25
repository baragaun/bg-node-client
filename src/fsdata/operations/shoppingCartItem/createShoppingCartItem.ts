import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreateShoppingCartItemArgs, ShoppingCartItemInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createShoppingCartItem: ShoppingCartItem;
  };
  errors?: { message: string }[];
};

const createShoppingCartItem = async (
  props: Partial<ShoppingCartItem>,
): Promise<QueryResult<ShoppingCartItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createShoppingCartItem: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateShoppingCartItemArgs = {
      input: props as unknown as ShoppingCartItemInput,
    };

    const response: ResponseDataType = await client.mutation.createShoppingCartItem({
      $: args,
      ...modelFields.shoppingCartItem,
    });

    logger.debug('fsdata.createShoppingCartItem received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.createShoppingCartItem: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.createShoppingCartItem response:',
      { response: JSON.stringify(response) });

    return {
      object: response.data.createShoppingCartItem
        ? new ShoppingCartItem(response.data.createShoppingCartItem)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createShoppingCartItem: error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createShoppingCartItem;
