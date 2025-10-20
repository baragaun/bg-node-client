import logger from '../helpers/logger.js';
const streamNames = (channelId) => {
    if (!channelId) {
        logger.error('nats.streamNames: channelId is required');
        throw new Error('streamNames: channelId is required');
    }
    return {
        channel: `first.spark.dev.channel.${channelId}`,
        channelMessages: `first.spark.dev.channel.${channelId}.messages`,
    };
};
export default streamNames;
//# sourceMappingURL=streamNames.js.map