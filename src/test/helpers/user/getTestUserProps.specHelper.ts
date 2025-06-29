import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { TestUserProps } from '../../../types/TestUserProps.js';

export const getTestUserPropsSpecHelper = (
  user: Partial<MyUser>,
): TestUserProps => {
  if (!user || !user.source) {
    return {};
  }

  try {
    return JSON.parse(user.source) as TestUserProps;
  } catch (error) {
    logger.error('getTestUserPropsSpecHelper error:', error);
    return {};
  }
};
