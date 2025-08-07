declare const factories: {
    channel: import("./definitions.js").ChannelFactory;
    channelInvitation: import("./definitions.js").ChannelInvitationFactory;
    channelMessage: import("./definitions.js").ChannelMessageFactory;
    channelParticipant: import("./definitions.js").ChannelParticipantFactory;
    user: import("./definitions.js").UserFactory;
    userInbox: import("./definitions.js").UserInboxFactory;
    walletItem: import("./definitions.js").WalletItemFactory;
};
export default factories;
