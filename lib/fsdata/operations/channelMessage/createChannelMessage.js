import { Graffle } from 'graffle';
import { parse } from 'graphql';
import { MutationType } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import gql from '../../gql/mutations/createChannelMessage.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const createChannelMessage = async (input) => {
    const config = libData.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(gql);
    try {
        const response = (await client.gql(document).send({ input }));
        return {
            operation: MutationType.create,
            object: response.createChannelMessage ? new ChannelMessage(response.createChannelMessage) : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createChannelMessage: failed', {
            error,
            headers: helpers.headers(),
        });
        throw error;
    }
};
export default createChannelMessage;
//# sourceMappingURL=createChannelMessage.js.map