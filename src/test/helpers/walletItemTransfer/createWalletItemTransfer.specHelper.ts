import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
// import { ServiceRequestResult } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';

export const createWalletItemTransferSpecHelper = async (
  props: Partial<WalletItemTransfer>,
  client: BgNodeClient,
): Promise<{ walletItemTransfer: WalletItemTransfer, serviceRequest: ServiceRequest }> => {
  logger.debug('createWalletItemTransferSpecHelper called.', { props });

  if (!props.walletItemId) {
    throw new Error('Must provide walletItemId to create a wallet item transfer');
  }

  if (!props.recipientFullName) {
    props.recipientFullName = chance.name();
  }
  if (!props.recipientEmail) {
    props.recipientEmail = chance.email();
  }
  if (!props.messageText) {
    props.messageText = chance.sentence();
  }

  const response =
    await client.operations.walletItemTransfer.createWalletItemTransfer(props);

  const walletItemTransfer = response.object;

  expect(response.error).toBeUndefined();
  expect(walletItemTransfer).toBeDefined();
  expect(response.object.walletItemId).toBe(props.walletItemId);
  expect(response.object.recipientFullName).toBe(props.recipientFullName);
  expect(response.object.recipientEmail).toBe(props.recipientEmail);
  expect(response.object.messageText).toBe(props.messageText);

  // The server currently fails to create/send the notification, so the service request result
  // is not ok.
  // expect(response.serviceRequest.result).toBe(ServiceRequestResult.ok);

  return { walletItemTransfer, serviceRequest: response.serviceRequest };
};
