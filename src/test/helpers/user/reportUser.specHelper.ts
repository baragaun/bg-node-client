import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { ReportUserReasonTextId } from '../../../enums.js';
import logger from '../../../helpers/logger.js';

export const reportUserSpecHelper = async (
  userId: string,
  reasonTextId: ReportUserReasonTextId,
  notes: string | undefined,
  client: BgNodeClient,
): Promise<void> => {
  logger.debug('BgServiceApiCheck.reportUser: calling API/reportUser',
    { userId, reasonTextId, notes });

  const response = await client.operations.myUser.reportUser(
    userId,
    reasonTextId,
    notes,
  );

  logger.debug('BgServiceApiCheck.reportUser: received response from reportUser',
    { updateUserResponse: response });

  expect(response).toBeDefined();
  expect(response.error).toBeUndefined();

  // todo: verify
};
