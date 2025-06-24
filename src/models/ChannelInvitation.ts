import { BgChannelInvitation } from './BgChannelInvitation.js';

export class ChannelInvitation extends BgChannelInvitation {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ChannelInvitation>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['name'];
  }
}
