import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import gql from '../../gql/queries/findMyChannels.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findMyChannels = async (options) => {
    if (!libData.isInitialized()) {
        logger.error('findMyChannels: unavailable');
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
    const args = {
        options: options,
    };
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send(args));
        logger.debug('fsdata.findMyChannels: response received.', response);
        return {
            objects: response.findMyChannels.map((channel) => new Channel(channel)),
        };
    }
    catch (error) {
        logger.error('fsdata.findMyChannels: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findMyChannels;
//# sourceMappingURL=findMyChannels.js.map