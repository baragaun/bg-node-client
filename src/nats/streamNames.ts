const streamNames = (channelId: string = '*'): { channels: string; channelMessages: string } => ({
  channels: `first.spark.dev.channels.${channelId}`,
  channelMessages: `first.spark.dev.channel.${channelId}.messages`,
});

export default streamNames;