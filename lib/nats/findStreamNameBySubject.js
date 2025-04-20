import libData from '../helpers/libData.js';
export const findStreamNameBySubject = async (subjectName) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const jsm = await client.getJetStreamManager();
    // Any check by name,
    // for a nonexistent Stream,
    // errors just the same.
    return await jsm.streams.find(subjectName);
};
//# sourceMappingURL=findStreamNameBySubject.js.map