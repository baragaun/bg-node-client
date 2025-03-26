import chance, { uniqueEmail, uniqueUserHandle } from '../../helpers/chance.js';
import libData from '../../helpers/libData.js';
import { UserProps } from '../types.js';

export const generateUserPropsSpecHelper = (
  props?: UserProps,
): UserProps => {
  return {
    firstName: props?.firstName || chance.first(),
    lastName: props?.lastName || chance.last(),
    userHandle: props?.userHandle || uniqueUserHandle(),
    email: props?.email || uniqueEmail(
      libData.config()?.testEmailPrefix || 'test',
      libData.config()?.testEmailDomain || 'test.com',
    ),
    password: props?.password || chance.word(),
    source: props?.source || 'testtoken=666666',
    adminNotes: props?.adminNotes || 'testtoken=666666',
  };
};
