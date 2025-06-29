import { expect } from 'vitest';

import { ChannelMessage } from '../../../models/ChannelMessage.js';

export const verifyChannelMessagePropsSpecHelper = (
  channelMessage: Partial<ChannelMessage>,
  target: Partial<ChannelMessage>,
): void => {
  for (const key in target) {
    const targetValue = target[key as keyof ChannelMessage];
    const objValue = channelMessage[key as keyof ChannelMessage];

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
};
