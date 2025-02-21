declare const factories: {
    channel: (attributes: Partial<import("../../definitions.js").Channel>, userCount: number, messageCount: number, users?: import("../../definitions.js").User[], messages?: import("../../definitions.js").ChannelMessage[]) => import("../../definitions.js").Channel;
    channelMessage: (attributes: Partial<import("../../definitions.js").ChannelMessage>, sender?: import("../../definitions.js").User) => import("../../definitions.js").ChannelMessage;
    user: (attributes: Partial<import("../../definitions.js").User>) => import("../../definitions.js").User;
};
export default factories;
