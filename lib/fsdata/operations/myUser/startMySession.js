import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ContentStatus } from '../../../types/models/ContentStatus.js';
import startMySessionGql from '../../gql/mutations/startMySession.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const startMySession = async () => {
    const config = libData.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
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
            .send({ returnContentStatus: true }));
        if (!response.startMySessionV2) {
            return null;
        }
        return new ContentStatus(response.startMySessionV2);
    }
    catch (error) {
        logger.error('startMySession failed.', { error, headers: helpers.headers() });
        return null;
    }
};
export default startMySession;
//# sourceMappingURL=startMySession.js.map