import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { UserListItem } from '../../../models/UserListItem.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findUsers = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findUsers: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findUsers({
            $: args,
            ...modelFields.userListItem,
        });
        logger.debug('fsdata.findUsers received response.', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.findUsers: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        return {
            objects: response.data.findUsers
                ? response.data.findUsers.map((user) => new UserListItem(user))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findUsers: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findUsers;
//# sourceMappingURL=findUsers.js.map