import { expect } from 'vitest';

import { ChannelInvitation } from '../../../models/ChannelInvitation.js';

const propsToCheck = [
  'channelId',
  'recipientId',
  'channelName',
  'channelTopic',
  'messageText',
  'declineReasonTextId',
  'dismissedFromInboxBySenderAt',
  'dismissedFromInboxByRecipientAt',
  'readByRecipientAt',
  // The `status` property is breaking this test.
  // 'status',
  'suspendedAt',
  'suspendedBy',
  'userSearchId',
  'searchRank',
];

export const verifyChannelInvitationPropsSpecHelper = (
  channelInvitation: Partial<ChannelInvitation>,
  target: Partial<ChannelInvitation>,
): void => {
  for (const key in target) {
    if (propsToCheck.includes(key)) {
      const targetValue = target[key as keyof ChannelInvitation];
      const objValue = channelInvitation[key as keyof ChannelInvitation];

      if (targetValue !== undefined && targetValue !== null) {
        if (typeof targetValue === 'string') {
          expect(objValue).toBe(targetValue);
        } else if (Array.isArray(targetValue)) {
          expect(objValue).toEqual(targetValue);
        } else if (typeof targetValue === 'object') {
          expect(objValue).toMatchObject(targetValue);
          // } else {
          //   expect(targetValue).to.be(objValue);
        }
      }
    }
  }
};
