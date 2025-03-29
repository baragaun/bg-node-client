import { Graffle } from 'graffle';
import { parse } from 'graphql';
import { MutationType } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import gql from '../../gql/mutations/createChannelInvitation.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const createChannelInvitation = async (input) => {
    if (!libData.isInitialized()) {
        logger.error('createChannelInvitation: unavailable');
        return { error: 'unavailable' };
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
            object: response.createChannelInvitation ? new ChannelInvitation(response.createChannelInvitation) : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createChannelInvitation: failed', {
            error,
            headers: helpers.headers(),
        });
        return { error: error.message };
    }
};
export default createChannelInvitation;
//# sourceMappingURL=createChannelInvitation.js.map