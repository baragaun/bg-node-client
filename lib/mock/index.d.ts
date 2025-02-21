declare const mockOperations: {
    factories: {
        channel: (attributes: Partial<import("../definitions.js").Channel>, userCount: number, messageCount: number, users?: import("../definitions.js").User[], messages?: import("../definitions.js").ChannelMessage[]) => import("../definitions.js").Channel;
        channelMessage: (attributes: Partial<import("../definitions.js").ChannelMessage>, sender?: import("../definitions.js").User) => import("../definitions.js").ChannelMessage;
        user: (attributes: Partial<import("../definitions.js").User>) => import("../definitions.js").User;
    };
    createChannel: (attributes: Partial<import("../definitions.js").Channel>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").Channel>>;
    createChannelMessage: (attributes: Partial<import("../definitions.js").ChannelMessage>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").ChannelMessage>>;
    deleteChannel: (id: string) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").Channel>>;
    deleteChannelMessage: (id: string) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").ChannelMessage>>;
    findChannelMessages: (filter: import("../definitions.js").ChannelMessageFilter, skip: number, limit: number) => Promise<import("../definitions.js").ChannelMessage[]>;
    findChannels: (filter: import("../definitions.js").ChannelFilter, skip: number, limit: number) => Promise<import("../definitions.js").Channel[]>;
    updateChannel: (changes: Partial<import("../definitions.js").Channel>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").Channel>>;
    updateChannelMessage: (changes: Partial<import("../definitions.js").ChannelMessage>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").ChannelMessage>>;
};
export default mockOperations;
