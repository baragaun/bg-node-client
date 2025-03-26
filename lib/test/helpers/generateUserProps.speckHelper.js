import chance, { uniqueEmail, uniqueUserHandle } from '../../helpers/chance.js';
import libData from '../../helpers/libData.js';
export const generateUserPropsSpeckHelper = (props) => {
    return {
        firstName: props?.firstName || chance.first(),
        lastName: props?.lastName || chance.last(),
        userHandle: props?.userHandle || uniqueUserHandle(),
        email: props?.email || uniqueEmail(libData.config()?.testEmailPrefix || 'test', libData.config()?.testEmailDomain || 'test.com'),
        password: props?.password || chance.word(),
        adminNotes: props?.adminNotes || 'testtoken=666666',
    };
};
//# sourceMappingURL=generateUserProps.speckHelper.js.map