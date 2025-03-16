import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import isUserIdentAvailableGql from '../../gql/queries/isUserIdentAvailable.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const isUserIdentAvailable = async (userIdent, identType) => {
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create()
        .transport({
        url: data.config().fsdata.url,
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
        if (!response.isUserIdentAvailable) {
            return null;
        }
        return response.isUserIdentAvailable;
    }
    catch (error) {
        logger.error('isUserIdentAvailable failed.', {
            error,
            headers: helpers.headers(),
        });
        return null;
    }
};
export default isUserIdentAvailable;
//# sourceMappingURL=isUserIdentAvailable.js.map