import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/queries/findUserById.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findUserById = async (userId, options) => {
    if (!libData.isInitialized()) {
        logger.error('findUserById: unavailable');
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
        id: userId,
        options: options,
    };
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send(args));
        logger.debug('fsdata.findUserById: response received.', response);
        return { object: response.findUserById };
    }
    catch (error) {
        logger.error('fsdata.findMyUser: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findUserById;
//# sourceMappingURL=findUserById.js.map