import { BaseListFilter } from './BaseListFilter.js';

export class BgChannelParticipantListFilter extends BaseListFilter {
  public channelIds?: string[] | null;

  constructor(attributes?: Partial<BgChannelParticipantListFilter>) {
    super(attributes);

    if (attributes) {
      if (attributes.channelIds) {
        this.channelIds = attributes.channelIds;
      }
    }
  }
}
