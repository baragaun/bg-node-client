import { Graffle } from 'graffle';
import { parse } from 'graphql';
import { MutationType, } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/declineChannelInvitation.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const declineChannelInvitation = async (channelInvitationId, reasonTextId) => {
    if (!libData.isInitialized()) {
        logger.error('declineChannelInvitation: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(gql);
    const args = {
        channelInvitationId,
        reasonTextId: reasonTextId,
    };
    try {
        await client.gql(document).send(args);
        return {
            operation: MutationType.update,
        };
    }
    catch (error) {
        logger.error('fsdata.declineChannelInvitation: failed', {
            error,
            headers: helpers.headers(),
        });
        return { error: error.message };
    }
};
export default declineChannelInvitation;
//# sourceMappingURL=declineChannelInvitation.js.map