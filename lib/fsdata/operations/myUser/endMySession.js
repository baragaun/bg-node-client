import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/endMySession.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const endMySession = async () => {
    if (!libData.isInitialized()) {
        logger.error('endMySession: unavailable');
        return { error: 'unavailable' };
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
        await client
            // @ts-ignore
            .gql(document)
            .send();
        return {};
    }
    catch (error) {
        logger.error('endMySession failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default endMySession;
//# sourceMappingURL=endMySession.js.map