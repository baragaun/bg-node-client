import { BgChannelInbox } from './BgChannelInbox.js';

export class ChannelInbox extends BgChannelInbox {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public assumedMentorId?: string | null;
  public mm2Id?: string | null;
  public syncedWithMm2At?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ChannelInbox>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.assumedMentorId !== undefined) {
        this.assumedMentorId = attributes.assumedMentorId;
      }
      if (attributes.mm2Id !== undefined) {
        this.mm2Id = attributes.mm2Id;
      }
      if (attributes.syncedWithMm2At !== undefined && attributes.syncedWithMm2At !== '') {
        this.syncedWithMm2At = attributes.syncedWithMm2At;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return [];
  }
}
