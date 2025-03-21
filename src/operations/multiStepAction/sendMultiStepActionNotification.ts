import { MutationType, NotificationMethod } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import logger from '../../helpers/logger.js';
import { MutationResult } from '../../types/MutationResult.js';

const sendMultiStepActionNotification = async (
  actionId: string,
  email: string | undefined,
  phoneNumber: string | undefined,
  notificationMethod: NotificationMethod,
): Promise<MutationResult<string>> => {
  try {
    logger.debug('BgNodeClient.operations.multiStepAction.sendMultiStepActionNotification called.',
      { actionId, notificationMethod });

    const response = await fsdata.multiStepAction.sendMultiStepActionNotification(
      actionId,
      email,
      phoneNumber,
      notificationMethod,
    );

    logger.debug('BgNodeClient.operations.multiStepAction.sendMultiStepActionNotification response received.',
      { actionId, notificationMethod, response });

    return {
      operation: MutationType.create,
      object: response,
    };
  } catch (error) {
    logger.error(error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default sendMultiStepActionNotification;
