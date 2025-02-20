/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BgChannelsUserMetadata } from './BgChannelsUserMetadata.js'

export class ChannelsUserMetadata extends BgChannelsUserMetadata {
  public mentoringSessionCount = 0

  constructor(attributes?: Partial<ChannelsUserMetadata>) {
    super(attributes)

    if (attributes) {
      if (
        attributes.mentoringSessionCount === 0 ||
        (
          attributes.mentoringSessionCount &&
          !isNaN(attributes.mentoringSessionCount)
        )
      ) {
        this.mentoringSessionCount = attributes.mentoringSessionCount
      }
    }
  }
}
