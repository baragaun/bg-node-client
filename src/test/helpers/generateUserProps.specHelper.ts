import chance, { uniqueEmail, uniqueUserHandle } from '../../helpers/chance.js';
import libData from '../../helpers/libData.js';
import { MyUser } from '../../models/MyUser.js';

export const generateUserPropsSpecHelper = (
  props?: Partial<MyUser>,
): Partial<MyUser> => {
  const adminNotes = props?.adminNotes ||
    JSON.stringify({ password: chance.string({ length: 8 }) });

  return {
    firstName: props?.firstName || chance.first(),
    lastName: props?.lastName || chance.last(),
    userHandle: props?.userHandle || uniqueUserHandle(),
    email: props?.email || uniqueEmail(
      libData.config()?.testEmailPrefix || 'test',
      libData.config()?.testEmailDomain || 'test.com',
    ),
    adminNotes,
    source: props?.source || 'testtoken=666666',
  };
};
