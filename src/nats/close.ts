import libData from '../helpers/libData.js';

const close = async (): Promise<void> => {
  const client = libData.natsClient();

  if (client && client.isConnected) {
    await client.close();
  }

  libData.setNatsClient(undefined);
};

export default close;
