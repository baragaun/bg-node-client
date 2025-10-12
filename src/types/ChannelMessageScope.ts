import { IncludeFilterOption } from '../enums.js';

export type ChannelMessageScope = {
  channelHaveUnseenMessages?: IncludeFilterOption;
  channelInvitationMustBeAccepted?: boolean;
  channelMustHaveMessages?: boolean;
  includeArchivedMessages?: IncludeFilterOption;
  includeSystemMessages?: IncludeFilterOption;
};
