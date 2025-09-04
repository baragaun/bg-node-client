import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransferAcceptInfo } from '../../../models/WalletItemTransferAcceptInfo.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  QueryFindWalletItemTransferAcceptInfoByTransferSlugArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findWalletItemTransferAcceptInfoByTransferSlug: WalletItemTransferAcceptInfo;
  };
  errors?: { message: string }[];
};

const findWalletItemTransferAcceptInfoByTransferSlug = async (
  transferSlug: string,
): Promise<QueryResult<WalletItemTransferAcceptInfo>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findWalletItemTransferAcceptInfoByTransferSlug: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindWalletItemTransferAcceptInfoByTransferSlugArgs = {
      transferSlug,
    };

    const response: ResponseDataType = await client.query.findWalletItemTransferAcceptInfoByTransferSlug({
      $: args,
      ...modelFields.walletItemTransferAcceptInfo,
    });

    logger.debug('fsdata.findWalletItemTransferAcceptInfoByTransferSlug response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findWalletItemTransferAcceptInfoByTransferSlug: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      object: new WalletItemTransferAcceptInfo(
        response.data.findWalletItemTransferAcceptInfoByTransferSlug,
      ),
    };
  } catch (error) {
    logger.error('fsdata.findWalletItemTransferAcceptInfoByTransferSlug: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransferAcceptInfoByTransferSlug;
