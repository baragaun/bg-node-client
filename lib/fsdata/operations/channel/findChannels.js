import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import gql from '../../gql/queries/findChannels.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findChannels = async (filter, match, options) => {
    if (!libData.isInitialized()) {
        logger.error('findChannels: unavailable');
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
        filter,
        match: match,
        options: options,
    };
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send(args));
        logger.debug('fsdata.findChannels: response received.', response);
        return {
            objects: response.findChannels.map((channel) => new Channel(channel)),
        };
    }
    catch (error) {
        logger.error('fsdata.findChannels: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannels;
//# sourceMappingURL=findChannels.js.map