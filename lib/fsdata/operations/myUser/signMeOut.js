import { Graffle } from 'graffle';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import signMeOutGql from '../../gql/mutations/signMeOut.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const signMeOut = async () => {
    if (!libData.isInitialized()) {
        logger.error('signMeOut: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(signMeOutGql);
    try {
        const response = await client.gql(document).send();
        logger.debug('SignOutUser response:', response);
        return {};
    }
    catch (error) {
        logger.error('SignOutUser mutation error:', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default signMeOut;
//# sourceMappingURL=signMeOut.js.map