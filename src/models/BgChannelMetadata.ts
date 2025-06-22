/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js';
import { BgLatestUnseenChannelMessageInfo } from './BgLatestUnseenChannelMessageInfo.js';

export class BgChannelMetadata extends BaseModelMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public unseenMessageInfo?: BgLatestUnseenChannelMessageInfo[] | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelMetadata>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.unseenMessageInfo) {
        this.unseenMessageInfo = attributes.unseenMessageInfo;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
