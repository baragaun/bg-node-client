import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import isUserIdentAvailableGql from '../../gql/queries/isUserIdentAvailable.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const isUserIdentAvailable = async (userIdent, identType) => {
    if (!libData.isInitialized()) {
        logger.error('isUserIdentAvailable: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create()
        .transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    })
        .use(Throws())
        .use(Opentelemetry());
    const document = parse(isUserIdentAvailableGql);
    const args = {
        ident: userIdent,
        identType: identType,
    };
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send(args));
        if (response.isUserIdentAvailable !== true && response.isUserIdentAvailable !== false) {
            logger.error('fsdata.isUserIdentAvailable: no valid response received.');
            return { error: 'system-error' };
        }
        return { object: response.isUserIdentAvailable };
    }
    catch (error) {
        logger.error('isUserIdentAvailable failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default isUserIdentAvailable;
//# sourceMappingURL=isUserIdentAvailable.js.map