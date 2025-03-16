import { Graffle } from 'graffle';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import signMeOutGql from '../../gql/mutations/signMeOut.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const signMeOut = async () => {
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create().transport({
        url: data.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(signMeOutGql);
    try {
        const response = await client.gql(document).send();
        logger.debug('SignOutUser response:', response);
    }
    catch (error) {
        logger.error('SignOutUser mutation error:', {
            error,
            headers: helpers.headers(),
        });
        throw error;
    }
};
export default signMeOut;
//# sourceMappingURL=signMeOut.js.map