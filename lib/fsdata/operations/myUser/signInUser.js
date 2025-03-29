import { Graffle } from 'graffle';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/signInUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (input) => {
    if (!libData.isInitialized()) {
        logger.error('SignInUser: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(gql);
    logger.debug('fsdata.SignInUser: sending request.', {
        input,
        headers: helpers.headers(),
    });
    try {
        const response = (await client
            .gql(document)
            .send({ input: input }));
        return { object: response.signInUser };
    }
    catch (error) {
        logger.error('fsdata.SignInUser: failed', { input, error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default SignInUser;
//# sourceMappingURL=signInUser.js.map