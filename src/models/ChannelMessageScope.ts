import { IncludeFilterOption } from '../enums.js';

export class ChannelMessageScope {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelMustHaveMessages?: boolean | null;
  public channelHaveUnseenMessages?: IncludeFilterOption | null;
  public channelInvitationMustBeAccepted?: boolean | null;
  public includeArchivedMessages?: IncludeFilterOption | null;
  public includeSystemMessages?: IncludeFilterOption | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ChannelMessageScope>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelMustHaveMessages !== undefined) {
        this.channelMustHaveMessages = attributes.channelMustHaveMessages;
      }
      if (attributes.channelHaveUnseenMessages !== undefined) {
        this.channelHaveUnseenMessages = attributes.channelHaveUnseenMessages;
      }
      if (attributes.channelInvitationMustBeAccepted !== undefined) {
        this.channelInvitationMustBeAccepted = attributes.channelInvitationMustBeAccepted;
      }
      if (attributes.includeArchivedMessages !== undefined) {
        this.includeArchivedMessages = attributes.includeArchivedMessages;
      }
      if (attributes.includeSystemMessages !== undefined) {
        this.includeSystemMessages = attributes.includeSystemMessages;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
