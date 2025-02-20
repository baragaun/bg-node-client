/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BgChannel } from './BgChannel.js'

export class Channel extends BgChannel {
  public assumedMentorId?: string | null
  public mm2Id?: string | null
  public syncedWithMm2At?: Date | null

  constructor(attributes?: Partial<Channel>) {
    super(attributes)

    if (attributes) {
      if (attributes.assumedMentorId) {
        this.assumedMentorId = attributes.assumedMentorId
      }
      if (attributes.mm2Id) {
        this.mm2Id = attributes.mm2Id
      }
      if (attributes.syncedWithMm2At) {
        if (attributes.syncedWithMm2At instanceof Date) {
          this.syncedWithMm2At = attributes.syncedWithMm2At
        } else {
          this.syncedWithMm2At = new Date(attributes.syncedWithMm2At)
        }
      }
    }
  }
}
