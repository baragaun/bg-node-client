import { expect } from 'vitest';

import { MyUser } from '../../../models/MyUser.js';

export const verifyUserPropsSpecHelper = (
  user: Partial<MyUser>,
  target: Partial<MyUser>,
): void => {
  for (const key in target) {
    const targetValue = target[key as keyof MyUser];
    const objValue = user[key as keyof MyUser];

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
