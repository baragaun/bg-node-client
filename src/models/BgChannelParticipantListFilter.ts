import { BaseListFilter } from './BaseListFilter.js';

export class BgChannelParticipantListFilter extends BaseListFilter {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelIds?: string[] | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelParticipantListFilter>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelIds) {
        this.channelIds = attributes.channelIds;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
