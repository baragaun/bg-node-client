import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/reportUser.graphql.js';
import helpers from '../../helpers/helpers.js';
const reportUser = async (userId, reasonTextId, messageText, queryOptions = defaultQueryOptionsForMutations) => {
    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;
    if (!libData.isInitialized()) {
        logger.error('reportUser: unavailable');
        return { error: 'unavailable' };
    }
    if (!myUserId) {
        logger.error('reportUser: unauthorized.');
        return { error: 'unauthorized' };
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        const client = Graffle.create().transport({
            url: libData.config().fsdata.url,
            headers: helpers.headers(),
        });
        const document = parse(gql);
        const input = {
            userId,
            reasonTextId,
            messageText,
            createdBy: myUserId,
        };
        const args = { input };
        const response = await client
            .gql(document)
            .send(args);
        if (!response.reportUser) {
            logger.error('fsdata.reportUser: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        return {};
    }
    catch (error) {
        logger.error('fsdata.reportUser: failed with error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default reportUser;
//# sourceMappingURL=reportUser.js.map