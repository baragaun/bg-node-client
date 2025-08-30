import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { ReportUserReasonTextId } from '../../../enums.js';
import logger from '../../../helpers/logger.js';

export const reportUserForMeSpecHelper = async (
  userId: string,
  reasonTextId: ReportUserReasonTextId,
  notes: string | undefined,
  client: BgNodeClient,
): Promise<void> => {
  logger.debug('BgServiceApiCheck.reportUserForMe: calling API/reportUserForMe',
    { userId, reasonTextId, notes });

  const response = await client.operations.myUser.reportUserForMe(
    userId,
    reasonTextId,
    notes,
  );

  logger.debug('BgServiceApiCheck.reportUserForMe: received response from reportUserForMe',
    { updateUserResponse: response });

  expect(response).toBeTruthy();
  expect(response.error).toBeUndefined();

  // todo: verify
};
