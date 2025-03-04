import { BaseListFilter } from './BaseListFilter.js';

export class BgChannelParticipantListFilter extends BaseListFilter {
  public channelId?: string;

  constructor(attributes?: Partial<BgChannelParticipantListFilter>) {
    super(attributes);
  }
}
