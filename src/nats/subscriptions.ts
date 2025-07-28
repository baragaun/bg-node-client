import natsService from './index.js';

export const subscribeToChannelUpdates = async (
  channelId: string,
  onUpdate: (msg: any) => void,
) => {
  const client = natsService.getClient?.();
  if (!client) throw new Error('NATS client not available');
  const sub = client.subscribe(`channel.${channelId}.updated`, {
    callback: (err, msg) => {
      if (!err) onUpdate(msg.json());
    },
  });
  return sub;
};

export const subscribeToChannelMessageUpdates = async (
  channelId: string,
  onUpdate: (msg: any) => void,
) => {
  const client = natsService.getClient?.();
  if (!client) throw new Error('NATS client not available');
  const sub = client.subscribe(`channel.${channelId}.message.updated`, {
    callback: (err, msg) => {
      if (!err) onUpdate(msg.json());
    },
  });
  return sub;
};