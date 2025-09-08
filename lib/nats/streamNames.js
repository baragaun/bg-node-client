const streamNames = (channelId = '*') => ({
    channels: `first.spark.dev.channels.${channelId}`,
    channelMessages: `first.spark.dev.channel.${channelId}.messages`,
});
export default streamNames;
//# sourceMappingURL=streamNames.js.map