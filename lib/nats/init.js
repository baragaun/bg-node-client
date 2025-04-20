import { NatsClient } from './NatsClient.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const init = async (options) => {
    if (!Array.isArray(options.servers) || options.servers.length < 1) {
        logger.warn('NATS init called without valid options.');
        return;
    }
    const client = new NatsClient(options);
    await client.connect();
    libData.setNatsClient(client);
};
export default init;
//# sourceMappingURL=init.js.map