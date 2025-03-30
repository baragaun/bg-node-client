import { NotificationMethod as NotificationMethodFromClient } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationSendMultiStepActionNotificationArgs,
  NotificationMethod,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = {
  data: {
    sendMultiStepActionNotification: string;
  };
  errors?: { message: string }[];
};

const sendMultiStepActionNotification = async (
  actionId: string,
  email: string | undefined,
  phoneNumber: string | undefined,
  notificationMethod: NotificationMethodFromClient,
): Promise<QueryResult<string>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.sendMultiStepActionNotification: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationSendMultiStepActionNotificationArgs = {
      input: {
        actionId,
        email,
        phoneNumber,
        notificationMethod: notificationMethod as unknown as NotificationMethod,
      },
    };
    logger.debug('fsdata.sendMultiStepActionNotification: sending:', { args });

    const response: ResponseDataType = await client.mutation.sendMultiStepActionNotification({ $: args });

    logger.debug('fsdata.sendMultiStepActionNotification: received response:', { response });

    return { object: response.data.sendMultiStepActionNotification };
  } catch (error) {
    logger.error('fsdata.sendMultiStepActionNotification: failed',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default sendMultiStepActionNotification;
