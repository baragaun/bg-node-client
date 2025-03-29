import { Graffle } from 'graffle';
import { parse } from 'graphql';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/sendMultiStepActionNotification.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const sendMultiStepActionNotification = async (actionId, email, phoneNumber, notificationMethod) => {
    if (!libData.isInitialized()) {
        logger.error('sendMultiStepActionNotification: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(gql);
    const input = {
        actionId,
        email,
        phoneNumber,
        notificationMethod: notificationMethod,
    };
    try {
        const response = (await client.gql(document).send({ input }));
        return { object: response.sendMultiStepActionNotification };
    }
    catch (error) {
        logger.error('fsdata.sendMultiStepActionNotification: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default sendMultiStepActionNotification;
//# sourceMappingURL=sendMultiStepActionNotification.js.map