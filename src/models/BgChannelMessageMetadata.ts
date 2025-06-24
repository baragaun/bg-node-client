/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js';

export class BgChannelMessageMetadata extends BaseModelMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public senderUserHandle?: string | null;
  public senderFirstName?: string | null;
  public senderLastName?: string | null;
  public senderAvatarUrl?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelMessageMetadata>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.senderUserHandle) {
        this.senderUserHandle = attributes.senderUserHandle;
      }
      if (attributes.senderFirstName) {
        this.senderFirstName = attributes.senderFirstName;
      }
      if (attributes.senderLastName) {
        this.senderLastName = attributes.senderLastName;
      }
      if (attributes.senderAvatarUrl) {
        this.senderAvatarUrl = attributes.senderAvatarUrl;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
