import { Graffle } from 'graffle';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/createMultiStepAction.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const createMultiStepAction = async (input) => {
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
    const document = parse(gql);
    try {
        const response = (await client.gql(document).send({ input }));
        return response.createMultiStepAction;
    }
    catch (error) {
        logger.error('fsdata.createMultiStepAction: failed', {
            error,
            headers: helpers.headers(),
        });
        throw error;
    }
};
export default createMultiStepAction;
//# sourceMappingURL=createMultiStepAction.js.map