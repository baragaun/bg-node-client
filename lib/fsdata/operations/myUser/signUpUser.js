import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import signUpUserGql from '../../gql/mutations/signUpUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input) => {
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
    input.checkAvailable = true;
    const document = parse(signUpUserGql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ input }));
        logger.debug('SignUpUser response:', response);
        return response.signUpUser;
    }
    catch (error) {
        logger.error('SignUpUser mutation error:', {
            input,
            error,
            headers: helpers.headers(),
        });
        throw error;
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map