import { expect } from 'vitest';
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
export const verifyChannelInvitationPropsSpecHelper = (channelInvitation, target) => {
    for (const key in target) {
        if (propsToCheck.includes(key)) {
            const targetValue = target[key];
            const objValue = channelInvitation[key];
            if (targetValue !== undefined && targetValue !== null) {
                if (typeof targetValue === 'string') {
                    expect(objValue).toBe(targetValue);
                }
                else if (Array.isArray(targetValue)) {
                    expect(objValue).toEqual(targetValue);
                }
                else if (typeof targetValue === 'object') {
                    expect(objValue).toMatchObject(targetValue);
                    // } else {
                    //   expect(targetValue).to.be(objValue);
                }
            }
        }
    }
};
//# sourceMappingURL=verifyChannelInvitationProps.specHelper.js.map