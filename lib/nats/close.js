import libData from '../helpers/libData.js';
const close = async () => {
    const client = libData.natsClient();
    if (client && client.isConnected) {
        await client.close();
    }
    libData.setNatsClient(undefined);
};
export default close;
//# sourceMappingURL=close.js.map