import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import clientInfoStore from '../../../helpers/clientInfoStore.js';
import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import deleteMyUserGql from '../../gql/mutations/deleteMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const deleteMyUser = async (cause, description, deletePhysically) => {
    const clientInfo = clientInfoStore.get();
    const myUserId = clientInfo.myUserId;
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create()
        .transport({
        url: data.config().fsdata.url,
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
        logger.error('deleteMyUser failed.', { error, headers: helpers.headers() });
        return null;
    }
    if (!ok) {
        logger.error('deleteMyUser: backend did not send userId.');
        throw new Error('system-error');
    }
};
export default deleteMyUser;
//# sourceMappingURL=deleteMyUser.js.map