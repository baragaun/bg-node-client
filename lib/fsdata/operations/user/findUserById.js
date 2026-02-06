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
        logger.debug('fsdata.findUserById response:', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.findUserById: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        return {
            object: response.data.findUserById
                ? new User(response.data.findUserById)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findUserById: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findUserById;
//# sourceMappingURL=findUserById.js.map