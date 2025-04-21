const streamNames = (channelId: string = '*'): { channel: string; channelMessages: string } => ({
  channel: `first.spark.dev.channel.${channelId}`,
  channelMessages: `first.spark.dev.channel.${channelId}.messages`,
});

export default streamNames;