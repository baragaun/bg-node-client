import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ContentStatus } from '../../../models/ContentStatus.js';
import gql from '../../gql/mutations/startMySessionV2.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const startMySessionV2 = async () => {
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
    const document = parse(gql);
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
        logger.error('startMySessionV2 failed.', { error, headers: helpers.headers() });
        return null;
    }
};
export default startMySessionV2;
//# sourceMappingURL=startMySessionV2.js.map