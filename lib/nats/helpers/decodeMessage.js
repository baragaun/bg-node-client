export const decodeMessage = (msg) => {
    try {
        const decoder = new TextDecoder();
        const data = decoder.decode(msg.data);
        try {
            // Attempt to parse as JSON
            return JSON.parse(data);
        }
        catch {
            // Return as string if not valid JSON
            return data;
        }
    }
    catch (err) {
        console.error('Error decoding message:', err);
        throw err;
    }
};
//# sourceMappingURL=decodeMessage.js.map