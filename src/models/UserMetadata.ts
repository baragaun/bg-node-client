import { ChannelsUserMetadata } from './ChannelsUserMetadata.js';
import { SidUserMetadata } from './SidUserMetadata.js';

export class UserMetadata extends SidUserMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelsMetadata: ChannelsUserMetadata = new ChannelsUserMetadata();
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<UserMetadata>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelsMetadata !== undefined) {
        this.channelsMetadata = attributes.channelsMetadata;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['firstName', 'lastName', 'userHandle', 'email'];
  }
}
