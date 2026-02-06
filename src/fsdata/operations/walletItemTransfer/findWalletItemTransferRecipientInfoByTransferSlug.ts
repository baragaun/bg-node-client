import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransferRecipientInfo } from '../../../models/WalletItemTransferRecipientInfo.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  QueryFindWalletItemTransferRecipientInfoByTransferSlugArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findWalletItemTransferRecipientInfoByTransferSlug: WalletItemTransferRecipientInfo;
  };
  error?: string;
};

const findWalletItemTransferRecipientInfoByTransferSlug = async (
  transferSlug: string,
  transferSecret?: string | null,
): Promise<QueryResult<WalletItemTransferRecipientInfo>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findWalletItemTransferRecipientInfoByTransferSlug: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindWalletItemTransferRecipientInfoByTransferSlugArgs = {
      transferSlug,
      transferSecret,
    };

    const response: ResponseDataType = await client.query.findWalletItemTransferRecipientInfoByTransferSlug({
      $: args,
      ...modelFields.walletItemTransferRecipientInfo,
    });

    logger.debug('fsdata.findWalletItemTransferRecipientInfoByTransferSlug response.',
      { response: JSON.stringify(response) });

    if (response.error) {
      logger.error('fsdata.findWalletItemTransferRecipientInfoByTransferSlug: errors received.',
        { errorCode: (response.error as any)?.extensions?.code, errors: JSON.stringify(response.error) });

      return { error: response.error };
    }

    return {
      object: new WalletItemTransferRecipientInfo(
        response.data.findWalletItemTransferRecipientInfoByTransferSlug,
      ),
    };
  } catch (error) {
    logger.error('fsdata.findWalletItemTransferRecipientInfoByTransferSlug: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransferRecipientInfoByTransferSlug;
