import logger from '../../../helpers/logger.js';
export const getTestUserPropsSpecHelper = (user) => {
    if (!user || !user.source) {
        return {};
    }
    try {
        return JSON.parse(user.source);
    }
    catch (error) {
        logger.error('getTestUserPropsSpecHelper error:', error);
        return {};
    }
};
//# sourceMappingURL=getTestUserProps.specHelper.js.map