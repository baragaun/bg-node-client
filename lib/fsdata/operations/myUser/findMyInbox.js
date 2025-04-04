import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { UserInbox } from '../../../models/UserInbox.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findMyInbox = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findMyInbox: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const response = await client.query.findMyInbox({
            ...modelFields.userInbox,
        });
        logger.debug('fsdata.findMyInbox: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.findMyInbox: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.findMyInbox) {
            logger.error('fsdata.findMyInbox: not found.');
            return { error: 'not-found' };
        }
        return { object: new UserInbox(response.data.findMyInbox) };
    }
    catch (error) {
        const headers = helpers.headers();
        logger.error('findMyInbox failed.', { error, headers });
        return { error: error.message };
    }
};
export default findMyInbox;
//# sourceMappingURL=findMyInbox.js.map