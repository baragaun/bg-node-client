import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import startMySessionGql from '../../gql/mutations/startMySession.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const startMySession = async () => {
    if (!libData.isInitialized()) {
        logger.error('startMySession: unavailable');
        return { error: 'unavailable' };
    }
    const clientInfo = libData.clientInfoStore().clientInfo;
    if (!clientInfo.isSignedIn) {
        logger.error('startMySession: unauthorized');
        return { error: 'unauthorized' };
    }
    const deviceUuid = clientInfo.myUserDeviceUuid;
    const client = Graffle.create()
        .transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    })
        .use(Throws())
        .use(Opentelemetry());
    const document = parse(startMySessionGql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ deviceUuid }));
        if (response.startMySession != 'ok') {
            return { error: 'system-error' };
        }
        return {};
    }
    catch (error) {
        logger.error('startMySession failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default startMySession;
//# sourceMappingURL=startMySession.js.map