import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/queries/findAvailableUserHandle.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findAvailableUserHandle = async (startValue) => {
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
    const document = parse(gql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ startValue }));
        if (!response.findAvailableUserHandle) {
            return null;
        }
        return response.findAvailableUserHandle;
    }
    catch (error) {
        logger.error('findAvailableUserHandle failed.', {
            error,
            headers: helpers.headers(),
        });
        return null;
    }
};
export default findAvailableUserHandle;
//# sourceMappingURL=findAvailableUserHandle.js.map