import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';

export const userPasswordSpecHelper = (
  user: Partial<MyUser>,
): string | undefined => {
  if (!user || !user.adminNotes) {
    return undefined;
  }

  try {
    const json = JSON.parse(user.adminNotes);

    return json.password;
  } catch (error) {
    logger.error('userPasswordSpecHelper error:', error);
    return undefined;
  }
};
