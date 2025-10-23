import libData from '../helpers/libData.js';
const subscriptions = new Map();
const addSubscription = (subject, options) => {
    const client = libData.natsClient();
    const connection = client.getConnection();
    if (!connection) {
        throw new Error('NATS connection not available');
    }
    const sub = connection.subscribe(subject, options);
    subscriptions.set(subject, sub);
    return sub;
};
const natsStore = {
    addSubscription,
    getSubscription: (subject) => {
        return subscriptions.get(subject);
    },
    subscriptions,
};
export default natsStore;
//# sourceMappingURL=natsStore.js.map