import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import deleteMyUserGql from '../../gql/mutations/deleteMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const deleteMyUser = async (cause, description, deletePhysically) => {
    if (!libData.isInitialized()) {
        logger.error('deleteMyUser: unavailable');
        return { error: 'unavailable' };
    }
    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;
    const client = Graffle.create()
        .transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    })
        .use(Throws())
        .use(Opentelemetry());
    const document = parse(deleteMyUserGql);
    let ok = false;
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ cause, description, deletePhysically }));
        ok = response.deleteMyUser === myUserId;
    }
    catch (error) {
        logger.error('deleteMyUser failed.', { error: error.messages, stack: error.stack, headers: helpers.headers() });
        return {};
    }
    if (!ok) {
        logger.error('deleteMyUser: backend did not send userId.');
        return { error: 'system-error' };
    }
    return {};
};
export default deleteMyUser;
//# sourceMappingURL=deleteMyUser.js.map