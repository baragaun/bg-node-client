import { expect } from 'vitest';
export const verifyChannelMessagePropsSpecHelper = (channelMessage, target) => {
    for (const key in target) {
        const targetValue = target[key];
        const objValue = channelMessage[key];
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
//# sourceMappingURL=verifyChannelMessageProps.specHelper.js.map