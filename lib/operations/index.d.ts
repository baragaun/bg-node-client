declare const operations: {
    createChannel: (channel: Partial<import("../definitions.js").Channel>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").Channel>>;
    createChannelMessage: (channelMessage: Partial<import("../definitions.js").ChannelMessage>, sender?: import("../definitions.js").User) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").ChannelMessage>>;
    deleteChannel: (id: string) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").Channel>>;
    deleteChannelMessage: (id: string) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").ChannelMessage>>;
    findChannelMessages: (filter: import("../definitions.js").ChannelMessageFilter, skip: number, limit: number) => Promise<import("../definitions.js").ChannelMessage[]>;
    findChannels: (filter: import("../definitions.js").ChannelFilter, skip: number, limit: number) => Promise<import("../definitions.js").Channel[]>;
    updateChannel: (changes: Partial<import("../definitions.js").Channel>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").Channel>>;
    updateChannelMessage: (changes: Partial<import("../definitions.js").ChannelMessage>) => Promise<import("../definitions.js").MutateChannelResult<import("../definitions.js").ChannelMessage>>;
};
export default operations;
