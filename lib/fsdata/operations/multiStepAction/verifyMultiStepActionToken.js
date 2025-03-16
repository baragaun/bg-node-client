import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import gqlText from '../../gql/mutations/verifyMultiStepActionToken.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const verifyMultiStepActionToken = async (actionId, confirmToken, newPassword) => {
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    try {
        const client = Graffle.create().transport({
            url: data.config().fsdata.url,
            headers: helpers.headers(),
        });
        // .use(Throws())
        // .use(Opentelemetry());
        const document = parse(gqlText);
        const input = {
            actionId,
            token: confirmToken,
            newPassword,
        };
        logger.debug('Sending verifyMultiStepActionToken mutation with input:', input);
        const response = await client.gql(document).send({ input });
        logger.debug('verifyMultiStepActionToken response:', response);
        return response.verifyMultiStepActionToken;
    }
    catch (error) {
        logger.error('verifyMultiStepActionToken mutation error:', {
            error,
            headers: helpers.headers(),
        });
        throw error;
    }
};
export default verifyMultiStepActionToken;
//# sourceMappingURL=verifyMultiStepActionToken.js.map