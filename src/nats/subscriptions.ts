import libData from '../helpers/libData.js';

export const subscribeToChannelUpdates = async (
  channelId: string,
  onUpdate: (msg: any) => void,
) => {
  const client = libData.natsClient?.();
  if (!client) throw new Error('NATS client not available');
  const connection = client.getConnection();
  if (!connection) throw new Error('NATS connection not available');
  const sub = connection.subscribe(`channel.${channelId}.updated`, {
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
  const client = libData.natsClient?.();
  if (!client) throw new Error('NATS client not available');
  const connection = client.getConnection();
  if (!connection) throw new Error('NATS connection not available');
  const sub = connection.subscribe(`channel.${channelId}.message.updated`, {
    callback: (err, msg) => {
      if (!err) onUpdate(msg.json());
    },
  });
  return sub;
};