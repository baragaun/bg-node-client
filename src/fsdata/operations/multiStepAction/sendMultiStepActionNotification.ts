import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { NotificationMethod as NotificationMethodFromClient } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import {
  MutationSendMultiStepActionNotificationArgs,
  NotificationMethod,
  SendMultiStepActionNotificationInput,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/sendMultiStepActionNotification.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const sendMultiStepActionNotification = async (
  actionId: string,
  email: string | undefined,
  phoneNumber: string | undefined,
  notificationMethod: NotificationMethodFromClient,
): Promise<string> => {
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create().transport({
    url: libData.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry())

  const document = parse(gql) as TypedQueryDocumentNode<
    { sendMultiStepActionNotification: string },
    MutationSendMultiStepActionNotificationArgs
  >;

  const input: SendMultiStepActionNotificationInput = {
    actionId,
    email,
    phoneNumber,
    notificationMethod: notificationMethod as unknown as NotificationMethod,
  };

  try {
    const response = (await client.gql(document).send({ input })) as {
      sendMultiStepActionNotification: string;
    };

    return response.sendMultiStepActionNotification;
  } catch (error) {
    logger.error('fsdata.sendMultiStepActionNotification: failed', {
      error,
      headers: helpers.headers(),
    });
    throw error;
  }
};

export default sendMultiStepActionNotification;
