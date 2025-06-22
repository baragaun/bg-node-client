/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BgChannelMetadata } from './BgChannelMetadata.js';

export class ChannelMetadata extends BgChannelMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelInvitationAccepted = false;
  public messagesSentByCreatorCount = 0;
  public messagesSentByFirstParticipantCount = 0;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ChannelMetadata>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (
        attributes.channelInvitationAccepted === true ||
        attributes.channelInvitationAccepted === false
      ) {
        this.channelInvitationAccepted = attributes.channelInvitationAccepted;
      }
      if (
        attributes.messagesSentByCreatorCount === 0 ||
        (attributes.messagesSentByCreatorCount &&
          !isNaN(attributes.messagesSentByCreatorCount))
      ) {
        this.messagesSentByCreatorCount = attributes.messagesSentByCreatorCount;
      }
      if (
        attributes.messagesSentByFirstParticipantCount === 0 ||
        (attributes.messagesSentByFirstParticipantCount &&
          !isNaN(attributes.messagesSentByFirstParticipantCount))
      ) {
        this.messagesSentByFirstParticipantCount =
          attributes.messagesSentByFirstParticipantCount;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
