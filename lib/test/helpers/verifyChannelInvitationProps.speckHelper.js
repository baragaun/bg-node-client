import { expect } from 'vitest';
export const verifyChannelInvitationPropsSpeckHelper = (channelInvitation, target) => {
    for (const key in target) {
        const targetValue = target[key];
        const objValue = channelInvitation[key];
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
};
//# sourceMappingURL=verifyChannelInvitationProps.speckHelper.js.map