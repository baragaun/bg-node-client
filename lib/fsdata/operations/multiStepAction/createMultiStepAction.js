import { Graffle } from 'graffle';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/createMultiStepAction.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const createMultiStepAction = async (input) => {
    if (!libData.isInitialized()) {
        logger.error('createMultiStepAction: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(gql);
    try {
        const response = (await client.gql(document).send({ input }));
        return { object: response.createMultiStepAction };
    }
    catch (error) {
        logger.error('fsdata.createMultiStepAction: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createMultiStepAction;
//# sourceMappingURL=createMultiStepAction.js.map