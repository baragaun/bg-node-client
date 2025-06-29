import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { User } from '../../../models/User.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findUserById = async (userId) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findUserById: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { id: userId };
        const response = await client.query.findUserById({
            $: args,
            ...modelFields.user,
        });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findUserById: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.findUserById response:', { response });
        return {
            object: response.data.findUserById
                ? new User(response.data.findUserById)
                : null,
            error: Array.isArray(response.errors) && response.errors.length > 0
                ? response.errors.map(e => e.message).join(', ')
                : undefined,
        };
    }
    catch (error) {
        logger.error('fsdata.findUserById: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findUserById;
//# sourceMappingURL=findUserById.js.map