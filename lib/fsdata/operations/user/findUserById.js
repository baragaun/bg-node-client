import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import findUserByIdGql from '../../gql/queries/findUserById.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findUserById = async () => {
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
    const document = parse(findUserByIdGql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send());
        logger.debug('fsdata.findUserById: response received.', response);
        return response.findMyUser;
    }
    catch (error) {
        logger.error('fsdata.findMyUser: error', {
            error,
            headers: helpers.headers(),
        });
        return null;
    }
};
export default findUserById;
//# sourceMappingURL=findUserById.js.map