import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findMyUser = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findMyUser: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const response = await client.query.findMyUser({
            ...modelFields.myUser,
        });
        logger.debug('fsdata.findMyUser: response received.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findMyUser: errors received.', { errorCode: response.errors['0'].extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        if (response.errors) {
            logger.error('fsdata.findMyUser: failed with error.', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.findMyUser) {
            logger.error('fsdata.findMyUser: not found.');
            return { error: 'not-found' };
        }
        return { object: new MyUser(response.data.findMyUser) };
    }
    catch (error) {
        const headers = helpers.headers();
        logger.error('findMyUser failed.', { error, headers });
        return { error: error.message };
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map