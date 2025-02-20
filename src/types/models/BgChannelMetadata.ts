/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js'
import { BgLatestUnseenChannelMessageInfo } from './BgLatestUnseenChannelMessageInfo.js'

export class BgChannelMetadata extends BaseModelMetadata {
  public unseenMessageInfo?: BgLatestUnseenChannelMessageInfo[] | null

  constructor(attributes?: Partial<BgChannelMetadata>) {
    super(attributes)

    if (attributes) {
      if (attributes.unseenMessageInfo) {
        this.unseenMessageInfo = attributes.unseenMessageInfo
      }
    }
  }
}
