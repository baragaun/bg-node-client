import { expect } from 'vitest';

import { UserProps } from '../types.js';

export const verifyUserPropsSpecHelper = (
  user: Partial<UserProps>,
  target: Partial<UserProps>,
): void => {
  for (const key in target) {
    const targetValue = target[key as keyof UserProps];
    const objValue = user[key as keyof UserProps];

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
