import logger from '../../helpers/logger.js';
export const userPasswordSpecHelper = (user) => {
    if (!user || !user.adminNotes) {
        return undefined;
    }
    try {
        const json = JSON.parse(user.adminNotes);
        return json.password;
    }
    catch (error) {
        logger.error('userPasswordSpecHelper error:', error);
        return undefined;
    }
};
//# sourceMappingURL=userPassword.specHelper.js.map