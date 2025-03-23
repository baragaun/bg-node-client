/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js';

export class BgChannelMessageMetadata extends BaseModelMetadata {
  public senderUserHandle?: string | null;
  public senderFirstName?: string | null;
  public senderLastName?: string | null;
  public senderAvatarUrl?: string | null;

  constructor(attributes?: Partial<BgChannelMessageMetadata>) {
    super(attributes);

    if (attributes) {
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
    }
  }
}
