/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BgChannelMessage } from './BgChannelMessage.js'

export class ChannelMessage extends BgChannelMessage {
  public mm2ConversationId?: string | null
  public mm2Id?: string | null
  public syncedWithMm2At?: Date | null

  constructor(attributes?: Partial<ChannelMessage>) {
    super(attributes)

    if (attributes) {
      if (attributes.mm2ConversationId) {
        this.mm2ConversationId = attributes.mm2ConversationId
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
