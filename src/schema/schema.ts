import { BgChannelInboxSchema } from './BgChannelInboxSchema.js';
import { BgChannelInvitationSchema } from './BgChannelInvitationSchema.js';
import { BgChannelMessageSchema } from './BgChannelMessageSchema.js';
import { BgChannelSchema } from './BgChannelSchema.js';

const schema = {
  ChannelInbox: BgChannelInboxSchema,
  ChannelInvitation: BgChannelInvitationSchema,
  ChannelMessage: BgChannelMessageSchema,
  Channel: BgChannelSchema,
};

export default schema;
